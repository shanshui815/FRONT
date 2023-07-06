const express=require('express')
const port =3000
const app = express()
app.get('/delay1',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(function(){ //模拟请求超时
        response.send('hello delay')
    },3000)
})

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))