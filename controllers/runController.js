
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+8:00',
    dialectOptions: {
        useUTC: false
    },
});

const { exec } = require('child_process');

module.exports = {
    run:(req, res) => {
        exec('python model.py', (error, stdout, stderr) => {
            if (error){
                console.error(`Error: ${error.message}`);
                return res.status(500).json({error:'Internal Server Error'});
            }
            if (stderr){
                console.error(`Error:${stderr}`);
                return res.status(500).json({error:'Internal Server Error'});
            }
            res.json({output:stdout})
        });
    }
}


// app.get('/run', (req, res) => {
//     exec('python model.py', (error, stdout, stderr) => {
//         if (error){
//             console.error(`Error: ${error.message}`);
//             return res.status(500).json({error:'Internal Server Error'});
//         }
//         if (stderr){
//             console.error(`Error:${stderr}`);
//             return res.status(500).json({error:'Internal Server Error'});
//         }
//         res.json({output:stdout})
//     });
// });