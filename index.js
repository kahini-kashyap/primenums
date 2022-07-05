const express = require("express");
const app = express();

app.get("/number", function(req, res){
    res.send("Go to /number/:num to check if :num is prime or composite");
})

app.get("/number/:num", function(req,res){
    let num = parseInt(req.params.num);
    for(let i = 2; i<num;i++){
        if(num%i==0){
           res.send("The number " + num + " is composite.")
        }
    }

    res.send("The number " + num + " is prime.")

})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running");
    }
})