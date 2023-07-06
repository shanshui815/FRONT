const express=require('express')
const port =3000
const app = express()

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))

//针对 fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'zxx的AJAX学习笔记'};

    // response.send("Hello axios AJAX");
    response.send(JSON.stringify(data));

});