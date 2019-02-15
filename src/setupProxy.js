const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"https://m.mtime.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}