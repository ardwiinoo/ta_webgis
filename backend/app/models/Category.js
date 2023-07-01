const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define(
        'categories', {
            name: {
                type: Sequelize.STRING,
            }
        }
    );

    // Category.belongsToMany(School(sequelize, Sequelize), { 
    //     foreignKey: 'category_id' 
    // });
    
    return Category;
}