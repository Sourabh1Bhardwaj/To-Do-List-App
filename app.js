//jshint esversion:6

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use("view engine","ejs");

// app.get("/",function(req,res){
//     var today = new Date();
//     var currentDay = today.getDay;

//     if(currentDay === 6 || currentDay ===0){
//         res.write("<h1> Weekend </h1>");
//     }
//     else{
//         res.sendFile(__dirname+"/index.html");
//         res.send();
//     }
// });

// app.listen(3000,function(){
//     console.log("Server run on port 3000");
// });



//EJS
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.set("view engine","ejs");

// app.get("/",function(req,res){
//     var today = new Date();
//     var currentDay = today.getDay();
//     var day = "";

//     if(currentDay === 6 || currentDay === 0){
//         day = "weekend";
//     }else{
//         day = "Weekday";
//     }

//     res.render("list",{kindOfDay: day});

// });

// app.listen(3000,function(){
//     console.log("Server started on port 3000");
// });


//For whole Week
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine','ejs');

// app.get("/",function(req,res){

//     var today = new Date();
//     var currentDay = today.getDay();
//     var day = "";

//     switch(currentDay){
//         case 0:
//             day="Sunday";
//             break;
//         case 1:
//             day="Monday";
//             break;
//         case 2:
//             day="Tuesday";
//             break;
//         case 3:
//             day="Wednesday";
//             break;
//         case 4:
//             day="Thursday";
//             break;
//         case 5:
//             day="Friday";
//             break;
//         case 6:
//             day="Saturday";
//             break;
        
//         default:
//             console.log("Error: current day is equal to : "+currentDay);
//     }

//     res.render("list",{
//         kindOfDay : day
//     });

// });

// app.listen(3000,function(){
//     console.log("Server started on port 3000");
// });

// using toLocalDateString
// const express = require('express');
// const bodyParse = require('body-parser');

// const app = express();

// var item = "";

// app.set("view engine","ejs");

// app.use(bodyParse.urlencoded({extented:true}));

// app.get("/",function(req,res){
//     var options = {
//         weekday:"long",
//         day:"numeric",
//         month: "long"
//     };

//     var today = new Date();
//     var day = today.toLocaleDateString("en-US",options);

//     res.render("list",{
//         kindOfDay : day
//     });
// });

// //This code give an error because we render message again. so define key : value in one render and use redirect insted of render and also item function use as global

// app.post("/",function(req,res){
//     var item = req.body.newItem;
//     res.render("list",{newListItem:item});
// });

// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


//using toLocalDateString
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// var item = "";

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     var options = {
//         weekday : "long", 
//         day : "numeric",
//         month : "long"
//     };

//     var today = new Date();
//     // var day = today.toLocaleDateString("en-US")  
//     var day = today.toLocaleDateString("en-US",options); 


//     res.render("list",{
//         kindOfDay : day,
//         newListItem:item
//     });
// });

// app.post("/",function(req,res){
//     item = req.body.newItem;
//     // res.render("list",{newListItem:item}); //error
//     res.redirect("/");
// });


// app.listen(3000,function(){
//     console.log("Server is running on port 3000");
// });


//In above code if we add new items then that item replace to the previous one so that instead of using simple variable we use array
// const express = require('express');
// const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');

// const app = express();

// var items = [];

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){

//     var today = new Date();

//     var options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long"
//     }; 

//     var day = today.toLocaleDateString("en-US",options);

//     res.render("list", {kindOfDay:day, newListItem:items});

// });

// app.post("/",function(req,res){
//     var item = req.body.newItem;
    
//     items.push(item);

//     res.redirect("/");
// });

// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


//
// const express = require('express');
// const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');

// const app = express();

// let items = ["Buy Food","Cook Food","Eat Food"];

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// app.get("/",function(req,res){

//     let today = new Date();

//     let options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long"
//     }; 

//     let day = today.toLocaleDateString("en-US",options);

//     res.render("list", {kindOfDay:day, newListItems:items});

// });

// app.post("/",function(req,res){
//     var item = req.body.newItem;
    
//     items.push(item);

//     res.redirect("/");
// });

// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


//
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// let items = ["Buy Food","Cook Food","Eat Food"];
// let workItems = [];

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// app.get("/",function(req,res){

//     let today = new Date();

//     let options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long"
//     }; 

//     let day = today.toLocaleDateString("en-US",options);

//     res.render("list", {listTitle:day, newListItems:items});

// });

// app.post("/",function(req,res){
//     // console.log(req.body);
    
//     let item = req.body.newItem;
//     if(req.body.list === "work"){
//         workItems.push(item);
//         res.redirect("/work");
//     }
//     else{
//         items.push(item);
//         res.redirect("/");
//     }
// });

// // /work
// app.get("/work",function(req,res){
//     res.render("list",{listTitle:"work List", newListItems:workItems});
// });

// app.get("/about",function(req,res){
//     res.render("about");
// });

// // app.post("/work",function(req,res){
    
// //     let item = req.body.newItem;
// //     workItems.push(item);
// //     res.redirect("/work");
// // });

// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


//
// const express = require('express');
// const bodyParser = require('body-parser');
// const date = require(__dirname + "/date.js"); 

// // console.log(date);

// const app = express();

// const items = ["Buy Food","Cook Food","Eat Food"];
// const workItems = [];

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// app.get("/",function(req,res){

//     // let today = new Date();

//     // let options = {
//     //     weekday : "long",
//     //     day : "numeric",
//     //     month : "long"
//     // }; 

//     // let day = today.toLocaleDateString("en-US",options);
//     const day = date.getDate();

//     res.render("list", {listTitle:day, newListItems:items});

// });

// app.post("/",function(req,res){
//     // console.log(req.body);
    
//     const item = req.body.newItem;
//     if(req.body.list === "work"){
//         workItems.push(item);
//         res.redirect("/work");
//     }
//     else{
//         items.push(item);
//         res.redirect("/");
//     }
// });

// // /work
// app.get("/work",function(req,res){
//     res.render("list",{listTitle:"work List", newListItems:workItems});
// });

// app.get("/about",function(req,res){
//     res.render("about");
// });

// // app.post("/work",function(req,res){
    
// //     let item = req.body.newItem;
// //     workItems.push(item);
// //     res.redirect("/work");
// // });

// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// // const date = require(__dirname + "/date.js"); 
// const mongoose = require("mongoose");
// // console.log(date);

// const app = express();

// // const items = ["Buy Food","Cook Food","Eat Food"];
// // const workItems = [];

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todolistDB");

// const itemSchema = {
//     name:String
// };

// const Item = mongoose.model("Item",itemSchema);

// const item1 = new Item({
//     name:"Welcome to your todolist"
// });

// const item2 = new Item({
//     name:"Hit the + button to add a new item."
// });

// const item3 = new Item({
//     name:"<--Hit this to delete an item."
// });

// const defaultItem = [item1,item2,item3];

// // Item.insertMany(defaultItem,function(err){
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log("Successfully saved default items to DB!");
// //     }
// // });

// app.get("/",function(req,res){

//     Item.find({}, function(err,foundItems){
//         // console.log(foundItems);
//         if(foundItems.length == 0){
//             Item.insertMany(defaultItem,function(err){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log("Successfully saved default items to DB!");
//                 }
//             });
//             res.redirect("/");
//         }else{
//             res.render("list",{listTitle:"Today", newListItems:foundItems});
//         }
        
//     });
//     // const day = date.getDate();
//     // res.render("list", {listTitle:day, newListItems:items});

//     // res.render("list", {listTitle:"Today", newListItems:items});

// });

// app.post("/",function(req,res){
//     // console.log(req.body);
    
//     const itemName = req.body.newItem;
//     const item = new Item({
//         name:itemName
//     });
    
//     item.save();
//     res.redirect("/");
    
// });

// app.post("/delete",function(req,res){
//     const checkedItemId = req.body.checkbox;

//     Item.findByIdAndRemove(checkedItemId, function(err){
//         if(!err){
//             console.log("Sucessfully deleted checked item!");
//             res.redirect("/");
//         }
//     });
// });

// // /work
// app.get("/work",function(req,res){
//     res.render("list",{listTitle:"work List", newListItems:workItems});
// });

// app.get("/about",function(req,res){
//     res.render("about");
// });


// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });



// 346. Creating Custom Lists using Express Route Parameters
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");


// const app = express();

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todolistDB");

// const itemSchema = {
//     name:String
// };

// const Item = mongoose.model("Item",itemSchema);

// const item1 = new Item({
//     name:"Welcome to your todolist"
// });

// const item2 = new Item({
//     name:"Hit the + button to add a new item."
// });

// const item3 = new Item({
//     name:"<--Hit this to delete an item."
// });

// const defaultItem = [item1,item2,item3];

// const listSchema = {
//     name: String,
//     items:[itemSchema]       //array of items
// };

// const List = new mongoose.model("List",listSchema);

// app.get("/",function(req,res){

//     Item.find({}, function(err,foundItems){
//         if(foundItems.length === 0){
//             Item.insertMany(defaultItem,function(err){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log("Successfully saved default items to DB!");
//                 }
//             });
//             res.redirect("/");
//         }else{
//             res.render("list",{listTitle:"Today", newListItems:foundItems});
//         }
        
//     });

// });

// //route
// app.get("/:customListName",function(req,res){
//     const customListName = req.params.customListName;

//     List.findOne({name: customListName}, function(err,foundList){
//         if(!err){
//             if(!foundList){
//                 //Create a new list
//                 const list = new List({
//                     name: customListName,
//                     items: defaultItem
//                 });
//                 list.save();
//                 list.redirect("/"+customListName);
//             }else{
//                 //Show an existing list
//                 res.render("list",{listTitle: foundList.name , newListItems:foundList.items});
//             }
//         }
//     });
    
// });



// app.post("/",function(req,res){    
//     const itemName = req.body.newItem;
//     const item = new Item({
//         name:itemName
//     });
    
//     item.save();
//     res.redirect("/");
    
// });

// app.post("/delete",function(req,res){
//     const checkedItemId = req.body.checkbox;

//     Item.findByIdAndRemove(checkedItemId, function(err){
//         if(!err){
//             console.log("Sucessfully deleted checked item!");
//             res.redirect("/");
//         }
//     });
// });

// // /work
// app.get("/work",function(req,res){
//     res.render("list",{listTitle:"work List", newListItems:workItems});
// });

// app.get("/about",function(req,res){
//     res.render("about");
// });


// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


// 347. Adding New Items to the Custom ToDo Lists
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");


// const app = express();

// app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todolistDB");

// const itemSchema = {
//     name:String
// };

// const Item = mongoose.model("Item",itemSchema);

// const item1 = new Item({
//     name:"Welcome to your todolist"
// });

// const item2 = new Item({
//     name:"Hit the + button to add a new item."
// });

// const item3 = new Item({
//     name:"<--Hit this to delete an item."
// });

// const defaultItem = [item1,item2,item3];

// const listSchema = {
//     name: String,
//     items:[itemSchema]       //array of items
// };

// const List = new mongoose.model("List",listSchema);

// app.get("/",function(req,res){

//     Item.find({}, function(err,foundItems){
//         if(foundItems.length === 0){
//             Item.insertMany(defaultItem,function(err){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log("Successfully saved default items to DB!");
//                 }
//             });
//             res.redirect("/");
//         }else{
//             res.render("list",{listTitle:"Today", newListItems:foundItems});
//         }
        
//     });

// });

// //route
// app.get("/:customListName",function(req,res){
//     const customListName = req.params.customListName;

//     List.findOne({name: customListName}, function(err,foundList){
//         if(!err){
//             if(!foundList){
//                 //Create a new list
//                 const list = new List({
//                     name: customListName,
//                     items: defaultItem
//                 });
//                 list.save();
//                 res.redirect("/"+customListName);
//             }else{
//                 //Show an existing list
//                 res.render("list",{listTitle: foundList.name , newListItems:foundList.items});
//             }
//         }
//     });
    
// });



// app.post("/",function(req,res){    
//     const itemName = req.body.newItem;
//     const listName = req.body.list;

//     const item = new Item({
//         name:itemName
//     });
    
//     if(listName==="Today"){
//         item.save();
//         res.redirect("/");
//     }else{
//         List.findOne({name:listName}, function(err,foundList){
//             foundList.items.push(item);
//             foundList.save();
//             res.redirect("/"+listName);
//         });
//     }
    
    
// });

// app.post("/delete",function(req,res){
//     const checkedItemId = req.body.checkbox;

//     Item.findByIdAndRemove(checkedItemId, function(err){
//         if(!err){
//             console.log("Sucessfully deleted checked item!");
//             res.redirect("/");
//         }
//     });
// });

// // /work
// app.get("/work",function(req,res){
//     res.render("list",{listTitle:"work List", newListItems:workItems});
// });

// app.get("/about",function(req,res){
//     res.render("about");
// });


// app.listen(3000,function(){
//     console.log("Server running on port 3000");
// });


// 348. Revisiting Lodash and Deleting Items from Custom ToDo Lists
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Ashwins101:TZawnPmqqMdOVfXo@cluster0.nub8c.mongodb.net/todolistDB");

const itemSchema = {
    name:String
};

const Item = mongoose.model("Item",itemSchema);

const item1 = new Item({
    name:"Welcome to your todolist"
});

const item2 = new Item({
    name:"Hit the + button to add a new item."
});

const item3 = new Item({
    name:"<--Hit this to delete an item."
});

const defaultItem = [item1,item2,item3];

const listSchema = {
    name: String,
    items:[itemSchema]       //array of items
};

const List = new mongoose.model("List",listSchema);

app.get("/",function(req,res){

    Item.find({}, function(err,foundItems){
        if(foundItems.length === 0){
            Item.insertMany(defaultItem,function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Successfully saved default items to DB!");
                }
            });
            res.redirect("/");
        }else{
            res.render("list",{listTitle:"Today", newListItems:foundItems});
        }  
    });
});

//route
app.get("/:customListName",function(req,res){
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function(err,foundList){
        if(!err){
            if(!foundList){
                //Create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItem
                });
                list.save();
                res.redirect("/"+customListName);
            }else{
                //Show an existing list
                res.render("list",{listTitle: foundList.name , newListItems:foundList.items});
            }
        }
    });
});

app.post("/",function(req,res){    
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name:itemName
    });
    
    if(listName==="Today"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name:listName}, function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
        });
    }
    
    
});

app.post("/delete",function(req,res){
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName==="Today"){
        Item.findByIdAndRemove(checkedItemId, function(err){
            if(!err){
                console.log("Sucessfully deleted checked item!");
                res.redirect("/");
            }
        });
    }else{
        List.findOneAndUpdate({name:listName}, {$pull : {items:{_id: checkedItemId}}} , function(err,foundList){
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }
});

// /work
app.get("/work",function(req,res){
    res.render("list",{listTitle:"work List", newListItems:workItems});
});

app.get("/about",function(req,res){
    res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
    console.log("Server has started sucessfully!");
});







