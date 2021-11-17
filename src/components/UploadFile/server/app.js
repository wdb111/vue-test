let express = require('express');
let router = express.Router();
const app = express();
let multiparty = require('multiparty');
let util = require('util');
let fs = require('fs');
let cppMsg = require('cppmsg');
const {
    send
} = require('process');

/* 上传 */
app.post('/uploadFile', function (req, res, next) {
    /* 生成multiparty对象，并配置上传目标路径 */
    let form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = 'D:/SCKJ_TEST/source';
    //设置文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    // form.maxFields = 1000;   //设置所有文件的大小总和//上传后处理
    form.parse(req, function (err, fields, files) {
        console.log(files);
        let filesTemp = JSON.stringify(files, null, 2);
        if (err) {
            console.log('parse error:' + err);
        } else {
            let inputFile = files.file[0];
            let uploadedPath = inputFile.path;
            let dstPath = 'D:/SCKJ_TEST/source/' + inputFile.originalFilename;
            // 重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error:' + err);
                } else {
                    console.log('rename ok');
                }
            });
        }
        res.writeHead(200, {
            'content-type': 'text/plain;charset=utf-8'
        });
        res.write('received upload:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: filesTemp
        }));
    });
});
// 访问图片
app.get('/source/*', (req, res) => {
    res.sendFile(`D:/SCKJ_TEST${req.url}`);
});

// module.exports = router;
app.listen(8888, function () {
    console.log('服务器正在监听中8888...');
});
