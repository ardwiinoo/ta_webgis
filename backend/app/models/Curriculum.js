const { Sequelize } = require("sequelize");
const School = require("./School");

module.exports = (sequelize, Sequelize) => {
    const Curriculum = sequelize.define(
        'curriculums', {
            version: {
                type: Sequelize.STRING
            },
            sum_lesson: {
                type: Sequelize.INTEGER
            },
            flagship_program: {
                type: Sequelize.STRING
            }
        }
    );

    // Curriculum.belongsToMany(School, {
    //     foreignKey: 'curriculum_id',
    // });

    return Curriculum;
}