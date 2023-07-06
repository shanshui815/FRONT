// express web应用程序框架

// AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
// AJAX 不是新的编程语言，而是一种使用现有标准的新方法。
// AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
// AJAX 不需要任何浏览器插件，但需要用户允许 JavaScript 在浏览器上执行。


// 1. 引入express
const express = require('express')
const port =3000
// 2. 创建应用对象  req /res 是对请求/响应报文的封装
const app = express()
// 3.创建路由规则
app.get('/',(req,res)=>{
    res.send('hello AJAX')
})
// 4. 监听端口启动服务
app.listen(port,()=>{
    console.log(`Example app linstening on ${port}...`)
})

