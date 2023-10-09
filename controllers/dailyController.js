const fs = require('fs');
const daily = require('../models/daily');

module.exports = {
    add: async (req, res, next)=> {
    try {
      const { filePath } = req.body;
      const { p1,p2,p3,p4,p5,p6,p7,loc,temp,humidity } = req.body;

      const photoData = fs.readFileSync(filePath);
      const base64Data = photoData.toString('base64');
      const bufferData = Buffer.from(base64Data, 'base64');

      await daily.create({
        photo: bufferData,
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        loc,
        temp,
        humidity
      });
      return res.json({ status: '200', message: '成功' });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
      return next();
    }
  }
}
