const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3bb5b3c43ad3483448191611';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: \n', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: \n', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: \n', todo);
// }).catch(e => console.log(e));

var id = '5a3b97afd0a6f33dac3f6b23';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch(e => console.log(e));
