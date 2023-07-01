const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'users', {
            fullname: {
                type: Sequelize.STRING,
            },
            username: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            refresh_token: {
                type: Sequelize.STRING,
            }
        }
    );

    return User;
}