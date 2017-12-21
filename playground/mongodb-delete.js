const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    console.log(res);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => {
  //   console.log(res);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a3b865bbdcc8c05c4dffbfe')}).then((res) => {
  //   console.log(res);
  // });

  // client.close();
});
