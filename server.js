let http = require('http');  // node 的http模块 node 自带的模块都是直接用
let url = require('url'); // node 中的 url 模块 解析url 路径和路径参数的
let querystring = require("querystring");
let s = require('./s.js');
let fs = require('fs'); // 文件处理模块
// fs.readFile 读文件 fs.writeFile 写文件
//req request 请求  res response 响应
// 我们可以更具路径不同响应不同的工具  通过req 里面的pathname
// req.method 请求方式
// 请求方式有几种 GET POST DELETE PUT OPTIONS(表示试探性的))
//我们可以更具请求方式不同返回不同的数据

// readFile 参数 文件路径 编码格式 回调 (err data) 在node里面一般都是err first(在前面) data last
fs.readFile('index.html','utf8',function(err,data){

})
http.createServer((req,res)=>{
    //解构赋值
        res.setHeader('content-type','text/html;charset=utf8');
        // pathname 路径名 query 路径参数 ?以后的参数
        let {query,pathname} = (url.parse(req.url,true));
let http = require('http');  // node 的http模块 node 自带的模块都是直接用
        if(pathname === '/login'){
            return res.end('登录');
        }
        if(pathname === '/sign'){
            if(req.method == 'POST'){
                //如果是POST、PUT等有请求体的请求处理方式
                let str = '';
                req.on('data',chunk=>{
                    str += chunk;
                })
                //请求结束拿到的数据
                res.on('end',()=>{
                    console.log(str);
                })
            }
            if(res.method == 'GET'){
                return res.end('注册');
            }else{
                return res.end('注册成功');
            }
            return res.end('注册');
        }
        //响应会什么数据
        res.end('not found');
}).listen(8888,function(){
    console.log('成功');
})
//listen 监听端口号