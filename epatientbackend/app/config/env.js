const env = {
  database: 'justindb',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
 ,JWT_KEY : 'secret'
  
};

module.exports = env;