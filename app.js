const express=require('express');
const port=3000;

const app=express();

app.listen(port,function() {
    console.log("Application is listening port "+port);
});
app.get('/',function(request, response){
    response.send("Simple Express example");
});

module.exports=app;