// const ershiService=require("../service/ershiService")

  function Login(req, res){
    let loginData = JSON.parse(req.query.params);
    let captcha = req.session.captcha;
    let obj={}
    if (loginData.authCode !== captcha) {
         obj = {
            data: null,
            mark: null,
            message: "验证码错误！",
            rel: false,
            status: 301
        }
    } else {
        // let index=req.query.index;
        // ershiService.ershi(index,function(results) {
        //     res.send(results)
        // })
         obj = {
            data: null,
            mark: null,
            message: "登陆成功！",
            rel: false,
            status: 200
        }
    }
    res.send(obj)

}
exports.Login=Login;

