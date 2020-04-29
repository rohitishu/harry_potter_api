// install the express,ejs and request Node js packet to run the code npm install --save express ejs request
var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");
app.get("/result",function(req,res)
{
  request("http://hp-api.herokuapp.com/api/characters",function(error,response,body)
   {
      if(!error && response.statusCode == 200)
      {
          var data=JSON.parse(body);
         res.render("result",{data:data}); 
      }
   });
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("Movie server has started ");
});
