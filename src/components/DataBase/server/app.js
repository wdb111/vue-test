const express = require("express");
const app = express();
const svgCaptcha = require('svg-captcha');//npm install --save svg-captcha SVG二维码插件
//设置处理post请求参数
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//导入cookie模块
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//导入session模块
const session = require('express-session');
app.use(session({
    secret: 'somesecrettoken',
    cookie: {maxAge: 1 * 60 * 1000}  // 1分钟
}));

function setHeaders(res){
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    return res;
}

//验证码
app.get("/authCode", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")//设置跨域
    res.setHeader("Access-Control-Allow-Credentials", "true")
    //cookie
    // if (req.cookies.isVisit) {
    //     console.log(req.cookies);
    //     res.send('再次欢迎你');
    // } else {
    //     // cookie设置过期时间为10分钟
    //     res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    //     res.send('欢迎你~');
    // }
    // //检查session中的isVisit字段
    // if (req.session.isVisit) {
    //     res.send('再次欢迎你');
    // } else {
    //     req.session.isVisit = true;
    //     res.send('欢迎你第一次来~');
    // }
    let codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        fontSize: 48,
        color: "#000",
        // color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        height: 40,
        width: 100,
        background: "#e5e5e5",//干扰线条数
    }
    let captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    let codeData = {
        img: captcha.data
    }
    res.status(200).send(codeData);
});

//注册
app.post("/reg", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    let regData = JSON.parse(req.query.params)
    adminService.addValue("T_USER", regData, function (result) {
        res.send(result)
    })
});
//登录
const Login = require("./controller/user");
app.post("/login", function (req, res) {
    setHeaders(res);
    Login.Login(req,res);
});


//添加数据
app.post("/addValue", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    let tableName = req.query.tableName
    let myobj = JSON.parse(req.query.params)
    adminService.addValue(tableName, myobj, function (result) {
        res.send(result)
    })
});
//查询数据
app.get("/selectValue", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    console.log(req.query)
    let tableName = req.query.tableName
    let myarr = JSON.parse(req.query.params)
    let myobj = {}
    for (i of myarr) {
        myobj[i.column] = i.value
    }
    adminService.selectValue(tableName, myobj, function (result) {
        res.send(result)
    })

});
//删除数据
app.post("/deleteValue", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Origin","http://localhost:8000")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    let tableName = req.query.tableName
    let myarr = JSON.parse(req.query.params)
    let myobj = {}

    for (i of myarr) {
        myobj[i.column] = i.value
    }
    adminService.deleteValue(tableName, myobj, function (result) {
        res.send(result)
    })
});
//更新数据
app.post("/updateValue", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Origin","http://localhost:8000")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    let tableName = req.query.tableName
    let myarr = JSON.parse(req.query.params)
    let myobj = {}

    for (i of myarr) {
        myobj[i.column] = i.value
    }
    let newData = JSON.parse(req.query.newData)
    adminService.updateValue(tableName, myobj, newData, function (result) {
        res.send(result)
    })
});

app.listen(9999, function () {
    console.log("服务器正在监听中9999...");
});