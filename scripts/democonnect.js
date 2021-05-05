var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', course: 'Doe' };

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, db) {
  if (err) throw err;
  console.log('Successfully connected to the demo database.');
  console.log(db);
  var database = db.db('demo');
  var collection = database.collection('WEB215');

  collection.insertOne(demoPerson, function (err, docs) 
  {
    console.log('Person inserted.', docs[0]);
    console.log('ID: ', demoPerson._id);

    db.close();
    console.log('Connection was closed.');
  });
});

