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
const db=client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //     text:'Something to do',
  //     Completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  // });
    // db.collection('Users').insertOne({
    //   name:'Pritish',
    //   location:'Mumbai',
    //   age:25
    // },(err,result)=>{
    //   if(err)
    //     {
    //       return console.log('Unable to connect to Users',err)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });
  client.close();
});
