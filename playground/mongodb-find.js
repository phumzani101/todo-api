const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    db.collection('Todos').find().toArray().then((docs) => {
        console.log(docs)
    })

    db.collection('Todos').find({}).count().then((docs) => {
        console.log(docs)
    })

    client.close()
})