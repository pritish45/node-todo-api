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

  //   db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID("5b2e388a23f3e73d47db783e")
  //   },{
  //     $set: {
  //       completed:false,
  //     }
  //   },
  //   {
  //     returnOriginal:false
  //   }
  // ).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b2e361ff7f4854f0853be07")
  },{
    $set: {
      name:'Pritish',
    },
    $inc:{
        age:1
    }
  },
  {
    returnOriginal:false
  }
).then((result)=>{
  console.log(result);
});
  client.close();
});
