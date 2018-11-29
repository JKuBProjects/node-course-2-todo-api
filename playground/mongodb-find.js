const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // Here we are fetching the data from mongodb database using find() method.
    // find() method returns a cursor. Cursor is nothing but the pointer which points to all the data or documents fetched
    // To get the data in the readable format we convert that cursor object data into an array using toArray() method.
    // Now since toArray() method returns a Promise form data, thus we can use then() method to define what to happen if process succeeded or failed
    // db.collection('Todos').find().toArray().then((docs) => {
    // This is for fetching a particular document based on the data provided inside find() ie by find({completed: false})
    // We can also fetch the document by following way
    /* db.collection('Todos').find({
        _id: new ObjectID('5bfea26e50471b76921d4db8')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the todos', err);
    }); */

    // Query for findinig the count of the Todo documents
    /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}.`);
    }, (err) => {
        console.log('Unable to fetch the todos', err);
    }); */

    // Query for fetching the users data by name(Catseye in this case)
    db.collection('Users').find({ name: 'Catseye' }).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the users data', err);
    });
    
    // client.close();
});