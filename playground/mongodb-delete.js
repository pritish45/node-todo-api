//const MongoClient=require('Mongodb').MongoClient;
const {MongoClient,ObjectID}=require('Mongodb');

// var obj =new ObjectId();
// console.log(obj);
// var user={name:'Pritish',age:25};
// var {name}=user;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mongo Db Server');
  }
  console.log('Connected to Mongo Server');
  const db= client.db('TodoApp');

  //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //   console.log(result);
    // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id :new ObjectID("5b2e362c30dfbe52e011bab4")}).then((result)=>{
    console.log(result);
  });
  client.close();
});
