var express=require('express');
var bodyParser=require('body-parser');


var{mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');
var {User}=require('./models/user');
const {ObjectID}=require('mongodb');

var app=express();
const port= process.env.PORT||3000;

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

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
});

/// get ID
app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send(' ');
  }
  Todo.findById(id).then((todos)=>{
    if(!todos)
    {
      return  res.status(404).send('');
    }
    res.send({todos});
  }).catch((e)=>{
      res.status(404).send(e);
  })
},(e)=>{
  res.status(400).send(e);
});

// app.get('/todos/:id', (req, res) => {
//   var id = req.params.id;
//
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }
//
//   Todo.findById(id).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }
//
//     res.send({todo});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

app.listen(port,()=>{
  console.log('Started the server on port',port);
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
