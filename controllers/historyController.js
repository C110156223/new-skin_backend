const daily = require('../models/daily');
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = new Sequelize('app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+8:00',
    dialectOptions: {
        useUTC: false
    },
});

module.exports = {
    allHis: async (req, res, next) => {
        try {
            const { user_id } = req.body;

            const alldate = await daily.findAll({
                where: {
                    user_id
                },
                attributes: [
                    [Sequelize.fn('DATE', sequelize.col('createdAt')), 'createdAt'], // 只檢索日期部分
                ],
                group: [Sequelize.fn('DATE', sequelize.col('createdAt'))], // 按日期分組以確保唯一日期
            });

            return res.json(alldate);

        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Error');
            return next();
        }
    },

    oneHis: async (req, res, next) => {
        try {
            const { user_id,createdAt } = req.body;

            const onedate = await daily.findOne({
                where: {
                    user_id,
                    createdAt
                }
            });

            return res.json(onedate);

        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Error');
            return next();
        }
    }
};

