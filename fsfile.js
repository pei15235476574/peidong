let fs = require('fs');
// readFile 参数 文件路径 编码格式 回调 (err data) 在node里面一般都是err first(在前面) data last
function readF(url,callback){
    fs.readFile(url,'utf8',callback)
}
readF('inner.json',(err,data)=>console.log(data));



function writeF(url,data,callback){
   fs.writeFile(url,JSON.stringify(data),'utf8',callback);
}
writeF('inner.json',{
    "id":1,
    "name":"苹果",
    "pirce":30
},(err,data)=>console.log(data));