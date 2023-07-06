const express=require('express')
const port =3000
const app = express()

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))

//针对 jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: 'zxx'};

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});
