const fs = require('fs');

module.exports = {
    exec_pic: async (req, res, next)=> {
    try {
        const { filePath } = req.body;

        const photoData = fs.readFileSync(filePath);
        // const base64Data = photoData.toString('base64');
        // const bufferData = Buffer.from(base64Data, 'base64');

        // 建立本地端儲存圖片的資料夾路徑
        const uploadDir = path.join(__dirname, '../savepics'); // 修改為您想要儲存圖片的資料夾路徑
        if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
        }

        // 產生一個唯一的檔案名稱
        const uniqueFileName = `${Date.now()}_${path.basename(filePath)}`;
        // 組合完整的檔案路徑
        const uploadPath = path.join(uploadDir, uniqueFileName);
        // 將圖片寫入本地端資料夾
        fs.writeFileSync(uploadPath, photoData);
        return res.json({ status: '200', message: '成功' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error inserting photo');
        return next();
    }
    }
}


// const fs = require('fs');
// const multer = require('multer');
// const path = require('path');

// const upload = multer({ dest: 'uploads/' });

// module.exports = {
//   exec_pic: async (req, res, next) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: 'No file received' });
//       }

//       const { path: filePath, originalname } = req.file;

//       if (!filePath) {
//         return res.status(400).json({ error: 'Invalid file path' });
//       }

//       // 讀取上傳的文件為 Buffer
//       const photoData = fs.readFileSync(filePath);

//       const uploadDir = path.join(__dirname, '../savepics');
//       if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir, { recursive: true });
//       }

//       const uniqueFileName = `${Date.now()}_${originalname}`;
//       const uploadPath = path.join(uploadDir, uniqueFileName);

//       fs.renameSync(filePath, uploadPath);

//       // 將文件 Buffer 包含在回應中
//       res.set({
//         'Content-Type': 'application/octet-stream',
//         'Content-Disposition': `attachment; filename="${uniqueFileName}"`,
//       });

//       return res.send(photoData);
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('Error inserting photo');
//       return next();
//     }
//   },
// };

