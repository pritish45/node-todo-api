const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

Todo.remove({}).then({
  console.log(result);
});



Todo.findOneAndRemove({}).then((todo)=>{
  console.log(todo);
});


Todo.findByIdAndRemove('').then((todo)=>{
  console.log(result);
});
