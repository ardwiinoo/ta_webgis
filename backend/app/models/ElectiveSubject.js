const { Sequelize } = require("sequelize")
const Category = require("./Category");

module.exports = (sequelize, Sequelize) => {
    const ElectiveSubject = sequelize.define(
        'electivesubjects', {
            name: {
                type: Sequelize.STRING
            },
            category_id: {
                type: Sequelize.INTEGER
            }
        }
    );

    ElectiveSubject.belongsTo(Category(sequelize, Sequelize), {
        foreignKey: 'category_id',
    });

    return ElectiveSubject;
}