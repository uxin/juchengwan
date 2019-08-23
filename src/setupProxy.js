// 该文件做代理以及mock数据和登入注册 ,该使用的是nodejs范畴
const httpProxy = require("http-proxy-middleware");
const userData = require("./data/userInfo.json");

module.exports = function (app) {
    // var userInfo=[]
    app.get("/test", (req, res) => {
        res.send("ok")
    })

    //  作用:参看url里是否带有api,当检测到url有api时就会转发
    // https://cnodejs.org/api/v1/topics 代理该接口示范
    // https://api.juooo.com/city/city/getHotCityList?version=6.0.1&referer=2
    app.use(httpProxy("/apis",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/apis":""
        }
    }))

    // https://m.juooo.com/Search/getShowCategory?version=6.0.3&referer=2
    app.use(httpProxy("/apm", {
        target: "https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/apm": ""
        }
    }))

    // 登录
    app.post("/login",(req,res)=>{
        // let query = req.body;
        // console.log(query);
        res.json(userData.userList[0]);
    })
}