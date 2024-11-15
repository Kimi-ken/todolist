const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items=["Buy food","Eat food","Sleep"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
    var today = new Date();
    
    var options={
        weekday:"long",
        day:"numeric",
        month:"long",

    }; 
    var day=today.toLocaleDateString("en-US",options);

   
    res.render("list", { kindOfDay: day,newItem:items });
});
app.post("/",function(req,res){
 var item= req.body.NewItem;
    items.push(item);
   res.redirect("/");  
});


app.listen(3000, function() {
    console.log("Server started at port 3000!");
});
