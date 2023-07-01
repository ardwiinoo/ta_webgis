const { Sequelize } = require("sequelize")
const Category = require("./Category");

module.exports = (sequelize, Sequelize) => {
    const CoreSubject = sequelize.define(
        'coresubjects', {
            name: {
                type: Sequelize.STRING
            },
            category_id: {
                type: Sequelize.INTEGER
            }
        }
    );

    CoreSubject.belongsTo(Category(sequelize, Sequelize), {
        foreignKey: 'category_id',
    });

    return CoreSubject;
}