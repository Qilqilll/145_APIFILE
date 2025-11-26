const db = require('../models');

async function connectDataBase() {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await db.sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        // Log the error and rethrow so callers can decide how to handle it (don't exit the whole process here)
        console.error('Unable to connect to the database:', error?.message || error);
        throw error;
    }
}
    module.exports = connectDataBase;
  