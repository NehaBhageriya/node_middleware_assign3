// middleware explation :plz check text file 


const express = require('express');
const app=express();

const middleware1 = function(req,res,next){
    console.log("middleware1");
    next();
}
app.use(middleware1);//to used it on complete app

const middleware2 =function(req,res,next){//this will used to create on specific route
    console.log("middleware2");
    next();
}
app.get('/',middleware2,function(req,res){
res.send("<h1>it using the global middleware 1 and also the middleware2</h1>");
});

app.get('/home',middleware2,function(req,res){
res.send("<h1>it using the global middleware 1 and also the middleware2</h1>");
})

app.get('/about',function(req,res){
    res.send("<h1>it is using only middleware1 </h1>");
})

app.listen(3006,()=>{
    console.log("sever is running ");
})