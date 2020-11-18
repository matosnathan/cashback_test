module.exports = {

  development: {
    database: 'cashback_dev',
    username: 'postgres',
    password: 123456,
    host: 'localhost',
    dialect: 'postgres'
  },

  test: {
    database: 'cashback_test',
    username: 'postgres',
    password: 123456,
    host: 'localhost',
    dialect: 'postgres'
  },

  production: {
    database: 'cashback',
    username: 'postgres',
    password: 123456,
    host: 'localhost',
    dialect: 'postgres'
  }
};