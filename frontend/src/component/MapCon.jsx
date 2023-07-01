import{React, useState, useEffect, useRef} from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { Polygon } from 'react-leaflet/Polygon'
import Detail from './Detail'
import L from 'leaflet'
import Information from './Information'
import { bantul } from '../data/bantul'
import ChartView from './Chart'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const MapCon = () => {
    const [coordinates, setCoordinates] = useState([]);
    const [data, setData] = useState([]);
    const [latUser, setLatUser] = useState("");
    const [lonUser, setLonUser] = useState("");
    const formRef = useRef(null);
    const [detailSchool, setDetailSchool] = useState(null);
    const [districtData, setDistrictData] = useState({});
    const [categoryData, setCategoryData] = useState({})

    function getAllData() {
      fetch("http://localhost:5000/v1/location")
          .then((response) => response.json())
          .then((data) => { 
              setData(data?.data);
              const newData = data?.data.reduce((districtObj, item) => {
                const district = item?.address?.district;
                if (district) {
                  districtObj[district] = (districtObj[district] || 0) + 1;
                }
                return districtObj;
              }, {});
              const categoryNew = data?.data.reduce((categoryObj, item) => {
                const categorynew = item?.category.name;
                if(categorynew) {
                  categoryObj[categorynew] = (categoryObj[categorynew] || 0) + 1;
                }
                return categoryObj;
              }, {}); 
              
              setDistrictData(newData); 
              setCategoryData(categoryNew);
            })
    }

    function getMyLocation() {
      navigator.geolocation.getCurrentPosition(function(position) { 
        // console.log("Latitude is :", position.coords.latitude.toFixed(6)); 
        // console.log("Longitude is :", position.coords.longitude.toFixed(6)); 

        setLatUser(position.coords.latitude);
        setLonUser(position.coords.longitude);
        // setLatUser("-7.74002090538193");
        // setLonUser("110.65424093754694");
      });
    }

    function getDetailSchool(id) {
      fetch(`http://localhost:5000/v1/location/${id}`)
        .then(res => res.json())
        .then(data => {
          setDetailSchool(data?.data)
          smoothScrollBy(400);
        })
    }

    function smoothScrollBy(offset) {
      const startY = window.scrollY;
      const stopY = startY + offset;
      let currentTime = 0;
    
      function scroll() {
        currentTime += 1 / 60;
    
        const p = currentTime / 0.5;
        const t = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    
        const newY = startY + (stopY - startY) * t;
        window.scrollTo(0, newY);
    
        if (currentTime < 0.5) {
          window.requestAnimationFrame(scroll);
        }
      }
    
      window.requestAnimationFrame(scroll);
    }

  
    function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(formRef.current);
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      };

      fetch("http://localhost:5000/v1/location/nearest", requestOptions)
        .then(response => response.json())
        // .then(data => console.log(data?.message))
        .then(data => {
          console.log("Data berhasil diperbarui:", data?.data);
          setData(data?.data) })
        .catch(error => console.error(error));

        // console.log("click")
    }

    useEffect(() => {
        setCoordinates(bantul.map((row) => [row[0], row[1]]));

        getAllData();   
        getMyLocation();   
        
      }, []);
      
      const labelList1 = Object.keys(districtData);
      const dataList1 = Object.values(districtData);
      const labelList2 = Object.keys(categoryData);
      const dataList2 = Object.values(categoryData);

      // console.log(data);
      // console.log(latUser);
      // console.log(lonUser);      
      // console.log(detailSchool);
      
      const center = [-7.889902024165003, 110.34763562728065]
    
      return (
        <>
        <div className='px-3 mt-3 rounded-md relative'>
          <div className="max-w-full p-2 bg-base-100 rounded-md" style={{ position: 'relative', zIndex: 0 }}>
            <MapContainer center={center} zoom={11} style={{ width: '100%', height: '500px', borderRadius: '10px'}} scrollWheelZoom={false}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              {data && data.map((school) => (
                  <Marker key={school.id} position={[school.location.lat, school.location.lon]}>
                    <Popup>
                      <img src={school.image ? school.image : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt='img' className='rounded-md w-full mb-2'></img>
                      {school.name}
                      <button 
                      className='bg-blue-500 p-2 text-white rounded-md mt-2 w-full'
                        onClick={() => {getDetailSchool(school.id)}}>
                          Lihat Detail
                        </button>
                    </Popup>
                  </Marker>
                ))
              }
              <Polygon positions={coordinates} />
            </MapContainer>
          </div>
            {data == null && (
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-5 rounded-md grid grid-cols-2 gap-4 items-center'>
              <h1 className='text-lg text-white col-span-2'>Oh no, tidak ada titik terdekat dari anda dalam radius 5 Km</h1>
              <button onClick={getAllData} className='bg-blue-500 text-white py-2 px-4 rounded-lg col-start-2'>Close</button>
            </div>
            )}
          <form ref={formRef} onSubmit={handleSubmit} method='POST' style={{ display: 'none' }}>
            <input type="text" name="lat" placeholder="lat" value={latUser} onChange={(event) => setLatUser(event.target.value)} />
            <input type="text" name="lon" placeholder="lon" value={lonUser} onChange={(event) => setLonUser(event.target.value)}/>
          </form>
          <button type='submit' onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] w-[40px] rounded-full top-10 right-10 absolute'>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="M25 1C11.766 1 1 11.766 1 25c0 13.233 10.766 24 24 24c13.233 0 24-10.767 24-24C49 11.766 38.233 1 25 1zm3 43.75V36h-6v8.75C13.375 43.443 6.557 36.625 5.25 28H14v-6H5.25C6.557 13.375 13.375 6.557 22 5.25V14h6V5.25C36.625 6.557 43.443 13.375 44.75 22H36v6h8.75C43.443 36.625 36.625 43.443 28 44.75z"/></svg>
          </button>
        </div>
          {!detailSchool && (
            <>
              <Information />
              <ChartView labels1={labelList1} data1={dataList1} label1={"Daerah"} labels2={labelList2} data2={dataList2} label2={"Kategori"} />
            </>
          )}
          {detailSchool && <Detail detailSchool={detailSchool} />}
        </>
      );
}

export default MapCon