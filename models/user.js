
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+8:00',
    dialectOptions: {
        useUTC: false
    }
});

const User = sequelize.define('User', {
    createdAt: {
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATEONLY
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = User;
