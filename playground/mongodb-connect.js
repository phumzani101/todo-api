const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })


    // db.collection('Users').insertOne({
    //     name: "Major",
    //     age: '29',
    //     location: 'Johannesburg'
    // }, (err, result) => {
    //     if (err) {return console.log('Fatal ', err)}

    //     console.log(JSON.stringify(result, undefined, 2))

    // })

    client.close()
})