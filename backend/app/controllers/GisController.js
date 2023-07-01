const db = require("../models");
const Category = db.category;
const Location = db.mapslocation;
const School = db.school;
const Curriculum = db.curriculum;
const Address = db.address;
const Elective = db.electivesubject;
const Core = db.coresubject;
const Special = db.specialprogram;

exports.getAllLocation = async (req, res) => {
    await School.findAll({
        include: [
            {
                model: Location,
                required: true,
            },
            {
                model: Address,
                required: true,
            },
            {
              model: Category,
              required: true,
            }
        ]
    })
        .then((schoolLocations) => {
            let filteredLocations = schoolLocations.map(location => {
                let plainLocation = location.toJSON();
                let {id, name, image, acreditation, mapslocation, address, category} = plainLocation;
                
                delete mapslocation.id;
                delete address.id;
                delete category.id;
                
                delete mapslocation.createdAt;
                delete mapslocation.updatedAt;
                delete address.createdAt;
                delete address.updatedAt;
        
                return {
                    id,
                    name,
                    image,
                    acreditation,
                    location: {
                        lat: mapslocation.lat,
                        lon: mapslocation.lon
                    },
                    category: {
                       name: category.name
                    },
                    address: {
                        street: address.street,
                        sub_district: address.sub_district,
                        district: address.district,
                        regency: address.regency,
                        pos_code: address.pos_code
                    },
                }
            })
            res.json({
                "error": "false",
                "message": "Success fetch school location",
                "data": filteredLocations
            })
        })
        .catch((error) => {
            res.status(500).json({
                "error": "true",
                "message": "Internal server error",
                "data": null
            })
        }) 
}

exports.getLocationById = async (req, res) => {
    try {
      const schoolId = req.params.id;
  
      const school = await School.findOne({
        where: {
          id: schoolId
        },
        include: [
          {
            model: Category,
            required: true,
          },
          {
            model: Location,
            required: true,
          },
          {
            model: Curriculum,
            required: true,
          },
          {
            model: Address,
            required: true,
          }
        ]
      });
  
      const [cores, electives, specials] = await Promise.all([
        Core.findAll({
          where: {
            category_id: school.category_id
          },
          attributes: ['name']
        }),
        Elective.findAll({
          where: {
            category_id: school.category_id
          },
          attributes: ['name']
        }),
        Special.findAll({
          where: {
            category_id: school.category_id
          },
          attributes: ['name']
        })
      ]);
  
      const formattedData = {
        id: school.id,
        name: school.name,
        headmaster: school.headmaster,
        image: school.image,
        sum_male_student: school.sum_male_student,
        sum_female_student: school.sum_female_student,
        sum_teacher: school.sum_teacher,
        acreditation: school.acreditation,
        location: {
          lat: school.mapslocation.lat,
          lon: school.mapslocation.lon
        },
        address: {
          street: school.address.street,
          sub_district: school.address.sub_district,
          district: school.address.district,
          regency: school.address.regency,
          pos_code: school.address.pos_code
        },
        category: {
          name: school.category.name
        },
        curriculum: {
          version: school.curriculum.version,
          sum_lesson: school.curriculum.sum_lesson,
          flagship_program: school.curriculum.flagship_program,
          core_subjects: cores.map(core => core.name),
          elective_subjects: electives.map(elective => elective.name),
          special_programs: specials.map(special => special.name),
        }
      };
      
      res.json({
        "error": "false",
        "message": "Success fetch location",
        "data": formattedData
      });
    } catch (error) {
      console.error(`GisController: ${error}`);
      res.status(500).json({
        "error": "true",
        "message": "Internal server error",
        "data": null
      });
    }
  };

exports.getNearestLocation = async (req, res) => {
    
  const { lat, lon } = req.body;
  
    try {
      const schools = await School.findAll({
        include: [
          {
            model: Location,
            required: true,
          },
          {
            model: Address,
            required: true,
          },
        ],
      });
  
      const filteredSchools = schools
        .map((school) => {
          const plainSchool = school.toJSON();
          const { id, name, image, acreditation, mapslocation, address } = plainSchool;
  
          // hitung jarak antara lokasi pengguna dan lokasi sekolah
          const R = 6371; // jari-jari bumi dalam satuan kilometer

          // ambil lat dan lon
          const lat1 = parseFloat(lat);
          const lon1 = parseFloat(lon);
          const lat2 = parseFloat(mapslocation.lat);
          const lon2 = parseFloat(mapslocation.lon);

          // hitung selisih lat dan lon
          const deltaLatitude = lat2 - lat1;
          const deltaLongitude = lon2 - lon1;

          // ubah selisih ke dalam radian
          const deltaLatitudeInRad = deltaLatitude * Math.PI / 180;
          const deltaLongitudeInRad = deltaLongitude * Math.PI / 180;

          // ubah lat pengguna ke radian
          const lat1InRad = lat1 * Math.PI / 180;

          // ubah lat sekolah ke radian
          const lat2InRad = lat2 * Math.PI / 180;

          // menghitung jarak antara dua titik lokasi dengan rumus Haversine
          const a = Math.sin(deltaLatitudeInRad / 2) * Math.sin(deltaLatitudeInRad / 2) +
            Math.cos(lat1InRad) * Math.cos(lat2InRad) *
            Math.sin(deltaLongitudeInRad / 2) * Math.sin(deltaLongitudeInRad / 2);
          
          // menghitung besar sudut antara dua titik lokasi
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

          // menghitung jarak dua titik dalam kilometer
          const distanceInKm = R * c;
  
          // jika jarak kurang dari atau sama dengan 5 km, kembalikan data sekolah
          if (distanceInKm <= 5) {
            return {
              id,
              name,
              image,
              acreditation,
              location: {
                lat: mapslocation.lat,
                lon: mapslocation.lon,
              },
              address: {
                street: address.street,
                sub_district: address.sub_district,
                district: address.district,
                regency: address.regency,
                pos_code: address.pos_code,
              },
              distance: distanceInKm.toFixed(2),
            };
          } else {
            return null;
          }
        })
        .filter((school) => school !== null);
  
        if (filteredSchools && filteredSchools.length > 0) {
          res.json({
            "error": "false",
            "message": "Success fetch nearest school location",
            "data": filteredSchools
          });
        } else {
          res.json({
            "error": "false",
            "message": "No nearest schools found",
            "data": null
          });
        }
    } catch (error) {
      console.error(`GisController: ${error}`);
      res.status(500).json({
        "error": "true",
        "message": "Internal server error",
        "data": null,
      });
    }
};