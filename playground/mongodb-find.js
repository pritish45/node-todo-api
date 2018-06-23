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

  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch todos",err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count:',count);
  //   //console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch todos",err);
  // });

  db.collection('Users').find({name:'Pritish'}).toArray().then((docs)=>{
    console.log('Users:');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch Users',err);
  })
  client.close();
});
