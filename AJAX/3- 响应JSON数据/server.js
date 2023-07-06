const express=require('express')
const port =3000
const app = express()

app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //1. 字符串response.send(change(obj))
     //2. response.send(JSON.stringify(obj))
     response.send(JSON.stringify(obj))

})
app.listen(port,()=>console.log(`Example app linstening on ${port}...`))

const obj={
    name:'zxx&yxx',
    age:33
}
function change(obj){
    let {name,age} = obj
    return `hello ${age}岁的 ${name}，祝你天天开心~前程似锦`
}


