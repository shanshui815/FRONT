const express=require('express')
const port =3000
const app = express()
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('hello  ie -7')
})

app.listen(port,()=>console.log(`Example app linstening on ${port}...`))