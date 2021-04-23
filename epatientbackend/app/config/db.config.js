const env = require('./env.js');
 
const Sequelize = require('sequelize');
//const  JWT_KEY  = require('./env.js');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
   }
   
   
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Patient = require('../models/patient.model.js')(sequelize, Sequelize);
db.Admin = require('../models/admin.model.js')(sequelize, Sequelize);
db.Doctor = require('../models/doctor.model.js')(sequelize, Sequelize);
// db.Prescription = require('../models/prescription.model')(sequelize, Sequelize);

// db.Patient.hasMany(db.Prescription, { as: "prescriptions" });
// db.Prescription.belongsTo(db.Patient, {
//   foreignKey: "patientId",
//   as: "patient",
// });

module.exports = db;
