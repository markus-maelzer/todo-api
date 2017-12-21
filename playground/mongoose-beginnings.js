// var newTodo = new Todo({
//   text: '   Edit this video   '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// })

// Todo.create({
//   text: 'finish tutorial',
//   completed: true,
//   completedAt: 1234
// }).then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// })


// Users
// email - require it - trim it - set type - set min lenght of 1



var user = new User({
  email: 'markus@example.com'
});

user.save().then((res) => {
  console.log(res);
}, (e) => {
  console.log(e);
});
