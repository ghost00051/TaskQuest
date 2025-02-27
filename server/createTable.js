const { sequelize, User } = require('./models/user');

const createTable = async () => {
    try {
        await sequelize.sync();
        console.log('Users table has been created.');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await sequelize.close();
    }
};

createTable();