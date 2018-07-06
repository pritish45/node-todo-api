const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5b3b41f9991204072cd33960';

if(!ObjectId.isValid(id)){
  console.log("id not valid");
}
Todo.find({
  _id:id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.find({
  _id:id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todos)=>{
  if(!todos){
    console.log("ID not found");
  }
  console.log('Todos',todos);
}).catch((e)=>console.log(e));
