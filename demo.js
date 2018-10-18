const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on("request",(req,res) => {
  res.setHeader('content-type','text/html;charset=utf-8')
  res.statusCode = 404
  if(req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname,'demo','index.html'),(err,data) =>{
      if(err) return console.log('读取首页失败',err)
      res.end(data)
    })
  }else if(req.url === '/list.html') {
    fs.readFile(path.join(__dirname,'demo','list.html'),(err,data) =>{
      if(err) return console.log('读取列表页失败',err)
      res.end(data)
    })
  }else if(req.url === '/login.html'){
    fs.readFile(path.join(__dirname,'demo','login.html'),(err,data) =>{
      if(err) return console.log('读取登录页失败',err)
      res.write(data)
      res.end()
    })
  }else{
    res.end('访问页面找不到')
  }
})
server.listen(8764,() =>{
  console.log('使用8764端口')
})