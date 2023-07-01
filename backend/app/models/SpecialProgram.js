const { Sequelize } = require("sequelize")
const Category = require("./Category");

module.exports = (sequelize, Sequelize) => {
    const SpecialProgram = sequelize.define(
        'specialprograms', {
            name: {
                type: Sequelize.STRING
            },
            category_id: {
                type: Sequelize.INTEGER
            }
        }
    );

    SpecialProgram.belongsTo(Category(sequelize, Sequelize), {
        foreignKey: 'category_id',
    });

    return SpecialProgram;
}