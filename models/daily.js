
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+8:00',
    dialectOptions: {
        useUTC: false
    },
    define: {
        timestamps: true, // 保留 createdAt
        updatedAt: false, // 關閉 updatedAt 的自動生成
    }
});

const Dailies = sequelize.define('Dailies', {
    createdAt: {
        type: DataTypes.DATEONLY
    },
    photo: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
    loc: {
        type: DataTypes.STRING
    },
    temp: {
        type: DataTypes.INTEGER
    },
    humidity: {
        type: DataTypes.INTEGER
    },
    p1: {
        type: DataTypes.STRING
    },
    p2: {
        type: DataTypes.STRING
    },
    p3: {
        type: DataTypes.STRING
    },
    p4: {
        type: DataTypes.STRING
    },
    p5: {
        type: DataTypes.STRING
    },
    p6: {
        type: DataTypes.STRING
    },
    p7: {
        type: DataTypes.STRING
    }
});

module.exports = Dailies;

