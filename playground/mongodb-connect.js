// const MongoClient = require('mongodb').MongoClient;
// Another simple way of declaring the above MongoClient is as follows. It is called Destructuring.
// Logic behind this is that if the variable name and the object's element name is to be the same then we can define it by the folloeing way
// This is similar to the 1st line or that first way of declaring the MongoClient.
// Also we are pulling off ObjectID property of the mongodb at the same time in the similar fashion.
const {MongoClient, ObjectID} = require('mongodb');

// Following is the simple example of Destructuring. This will output the value of the variable as the value of the element
// var user = {name: 'catseye', age: 25};
// var {name} = user;      // This defines that the value of the 'name' element from user is the value of the newly created variable name ie 'catseye'
// console.log(name);      // this outputs 'catseye' as the value of the 'name' variable

// This will connect to the mongodb server with the help of the url whihc holds the host, port and database to be connected to
// There will be db as the second arg in the callback function below, if MongoClient is version-2
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // This one line is added to create a reference to the database to query further
    // If MongoClient is of version-2 then no need of this line
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     // ops in result.ops will display all the documents that were inserted. Since we have inserted one data so will display only that one
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Catseye',
        age: 11,
        location: 'New Mumbai'
    }, (err, result) => {
        if (err) {
            return console.log('Unable ti insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // This will close the connection. This will be the line to be written if MongoClient is of version-2
    // db.close();

    client.close();
});