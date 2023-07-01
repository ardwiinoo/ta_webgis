const { Sequelize } = require("sequelize");
// Object.keys(require.cache).forEach(function(key) { delete require.cache[key] })
const Address = require("./Address");
const MapsLocation = require("./MapsLocation");
const Curriculum = require("./Curriculum");
const Category = require('./Category');

module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define(
        'schools', {
            name: {
                type: Sequelize.STRING
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            address_id: {
                type: Sequelize.INTEGER
            },
            maps_location_id: {
                type: Sequelize.INTEGER
            },
            curriculum_id: {
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.STRING
            },
            headmaster: {
                type: Sequelize.STRING
            },
            sum_male_student: {
                type: Sequelize.STRING
            },
            sum_female_student: {
                type: Sequelize.STRING
            },
            sum_teacher: {
                type: Sequelize.STRING
            },
            acreditation: {
                type: Sequelize.STRING
            }
        }
    );

    // console.log(Category);

    School.belongsTo(Category(sequelize, Sequelize), {
        foreignKey: 'category_id',
    });
    School.belongsTo(Address(sequelize, Sequelize), {
        foreignKey: 'address_id',
    });
    School.belongsTo(Curriculum(sequelize, Sequelize), {
        foreignKey: 'curriculum_id',
    });
    School.belongsTo(MapsLocation(sequelize, Sequelize), {
        foreignKey: 'maps_location_id',
    });

    return School;
}