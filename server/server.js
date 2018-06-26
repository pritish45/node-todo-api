var express=require('express');
var bodyParser=require('body-parser');


var{mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});




app.listen(3000,()=>{
  console.log('Started the server on port 3000');
});

module.exports={app};
// var newTodo=new Todo({
//   text:'Cook Dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo',doc);
// },(e)=>{
//   console.log('Unable to save',e);
// });

// var newTodo=new Todo({
//   text:'  Study for Gate  ',
// //  completedAt:new Date()
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo',doc);
// },(e)=>{
//   console.log('Unable to save',e);
// });

// var newUser=new user({
//   email:'Pritis@gmail.com'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved Todo',doc);
// },(e)=>{
//   console.log('Unable to save',e);
// });

//mongoose.connection.close();
