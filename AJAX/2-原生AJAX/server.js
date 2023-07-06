const express=require('express')
const port =3000
const app = express()
app.get('/server',(request,response)=>{
    // 响应头  允许跨域
    // response.setHeader('Access-Controll-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Origin','*')
    //  响应体
    response.send('hello my first AJAX')
})

// app.post('/server',(request, response)=>{
//all可以接收任意类型的请求，（包括自定义）
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
     //遇到自定义响应头时可以设置
     response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('hello my first AJAX')
})

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))