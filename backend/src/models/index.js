const { Sequelize } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Initialize Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions || {},
  }
);

const db = {
  sequelize,
  Sequelize,
};

// Import models
db.User = require('./User')(sequelize);

// More models will be added here
// db.Class = require('./Class')(sequelize);
// db.Subject = require('./Subject')(sequelize);
// db.Timetable = require('./Timetable')(sequelize);
// db.Grade = require('./Grade')(sequelize);
// db.Homework = require('./Homework')(sequelize);
// db.Attendance = require('./Attendance')(sequelize);
// db.Message = require('./Message')(sequelize);
// db.Conversation = require('./Conversation')(sequelize);
// db.Announcement = require('./Announcement')(sequelize);
// db.Document = require('./Document')(sequelize);
// db.Notification = require('./Notification')(sequelize);

// Define associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

