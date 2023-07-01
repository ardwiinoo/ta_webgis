const dbConfig = require("../config/DatabaseConfig");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    }
);

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require("./Category")(sequelize, Sequelize);
db.mapslocation = require("./MapsLocation")(sequelize, Sequelize);
db.school = require("./School")(sequelize, Sequelize);
db.address = require("./Address")(sequelize, Sequelize);
db.curriculum = require("./Curriculum")(sequelize, Sequelize);
db.user = require("./User")(sequelize, Sequelize);
db.coresubject = require("./CoreSubject")(sequelize, Sequelize);
db.electivesubject = require("./ElectiveSubject")(sequelize, Sequelize);
db.specialprogram = require("./SpecialProgram")(sequelize, Sequelize);

db.sequelize.sync()
    .then(() => {
        console.log('Database schema updated successfully');
    })
    .catch((error) => {
        console.error('Error updating database schema:', error);
    });

module.exports = db;
