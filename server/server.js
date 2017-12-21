const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      message: 'Todo not found - id invalid'
    });
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send({
        message: 'Todo not found in collection'
      });
    }
    res.send({todo})
  }).catch(e => res.send());


});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
})

module.exports = {app};
