const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json') // 剛剛輸出的 JSON
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// 引入 Controllers
const userController = require('./controllers/userController');
const historyController = require('./controllers/historyController');
const picController = require('./controllers/picController');
const dailyController = require('./controllers/dailyController');
const runController = require('./controllers/runController');

app.post('/register', userController.register);
app.post('/login', userController.login);
app.post('/daily', dailyController.add);
app.post('/allhis', historyController.allHis);
app.post('/onehis', historyController.oneHis);
app.post('/pic', picController.exec_pic);

app.get('/run',runController.run);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
