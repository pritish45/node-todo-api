// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://Pritish:salianpl123@ds125381.mlab.com:25381/todoapp'
// };
var mongoose=require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect( process.env.MONGODB_URI);

module.exports={mongoose};
