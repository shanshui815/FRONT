const express = require('express');

const app = express()
const port =3000

//针对 jsonp 服务
app.all('/jsonp-server', (request, response) =>{
    // response.send('HELLO JSONP-server');
    // script标签最好还是返回js代码，要的是一段函数的调用
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'zxx'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`handle(${str})`);

});

//用户名检测是否存在
app.all('/check-username', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果形式 是一个函数调用，而函数的实参就是我们想给客户端返回的结果数据
    response.end(`handle(${str})`);

});

//jQuery服务中的jsonp
app.all('/jquery-jsonp-server', (request, response) =>{
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'zxx',
        city: ['北京', '上海', '深圳','成都']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);

});


app.listen(port,()=>{
    console.log("服务已经启动...");
})