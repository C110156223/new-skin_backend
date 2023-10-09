
const User = require('../models/user');

module.exports = {
    register: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            const user = await User.create({
                username,
                password
            });

            return res.json({ status: '201', message: '註冊成功' });

        } catch (err) {
            res.json({ status: '403', message: '已存在相同用戶名' });
            return next();
        }
    },

    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({
                where: {
                    username
                }
            });

            if (!user) {
                res.json({ status: '403', message: '用戶名不存在' });
                return next();
            }

            if (password !== user.password) {
                res.json({ status: '403', message: '輸入帳密有誤' });
                return next();
            }

            return res.json({ status: '200', message: '登入成功' });

        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Error');
            return next();
        }
    }
};

