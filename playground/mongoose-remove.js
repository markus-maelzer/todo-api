const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// removes all documents that matches the parameter of remove()
// to remove all: use remove({}) -> cuz all are objects :O
// only gets number of remove items back
// Todo.remove({}).then((res) => {
//   console.log(res);
// })


// removes what it finds based on the parameter
// and returns the removed document
// Todo.findOneAndRemove()


// same but with id
// Todo.findByIdAndRemove()

Todo.findOneAndRemove('asdf').then((todo) => {
  
});
