const express=require('express')
const port =3000
const app = express()
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('hello delay')
    }, 3000);
})

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))