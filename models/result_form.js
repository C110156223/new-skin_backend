
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
    },
});

const result_form = sequelize.define('result_form', {
    createdAt: {
        type: DataTypes.DATEONLY
    },
    name: {
        type: DataTypes.STRING
    },
    birth: {
        type: DataTypes.DATE
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
    q1: {
        type: DataTypes.STRING
    },
    q2: {
        type: DataTypes.STRING
    },
    q3: {
        type: DataTypes.STRING
    },
    q4: {
        type: DataTypes.STRING
    },
    q5: {
        type: DataTypes.STRING
    },
    q6: {
        type: DataTypes.STRING
    },
    q7: {
        type: DataTypes.STRING
    }
});

module.exports = result_form;

