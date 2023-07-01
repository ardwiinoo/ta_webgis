const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const MapsLocation = sequelize.define(
        'mapslocation', {
            lat: {
                type: Sequelize.DOUBLE,
            },
            lon: {
                type: Sequelize.DOUBLE,
            }
        }
    );

    // MapsLocation.belongsToMany(School, {
    //     foreignKey: 'maps_location_id',
    // });
    
    return MapsLocation;
}