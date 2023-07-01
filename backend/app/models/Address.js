const { Sequelize } = require("sequelize");
const School = require("./School");

module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
        'addresses', {
            street: {
                type: Sequelize.STRING
            },
            sub_district: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            regency: {
                type: Sequelize.STRING
            },
            pos_code: {
                type: Sequelize.STRING
            }
        }
    );

    // Address.belongsToMany(School, {
    //     foreignKey: 'address_id',
    // });

    return Address;
}