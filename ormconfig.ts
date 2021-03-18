module.exports = {
  type: process.env.DATABASE_TYPE,
  database: process.env.DATABASE,
  synchronize: true,
};
