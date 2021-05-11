const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let MongoClient = require('mongodb').MongoClient;
let mongodb = require('mongodb');
const { response } = require("express");
let guestEntries = Array();

const app = express();

const save = () => {
};

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
});

app.use(express.static("./client"));

app.get("/guest-list", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017/kawashopdb", function (err, db) {
    db.collection('kawashop', function (err, collection) {
        
      collection.find({}).toArray(function(err, items) {
         if(err) throw err;    
         console.log(items);
         guestEntries = items;
         console.log(guestEntries);
         return res.json(items);      
     });

    });
  })
});

app.put("/guest/:id", (req, res) => {
  let id = req.params.id
  MongoClient.connect("mongodb://localhost:27017/kawashopdb", function (err, db) {
    console.log(id);
    let newValues = {$set: {name: req.body.name }};
    console.log(newValues);
    db.collection("kawashop").updateOne({_id : new mongodb.ObjectID(id)}, newValues, function(err, res) {
      if (err) throw err;
    });
  });

  res.json({
    status: "success",
    term: req.body
  });
});

app.post("/add-guest/", (req, res) => {
  console.log(req);
  MongoClient.connect("mongodb://localhost:27017/kawashopdb", function (err, db) {
    db.collection('kawashop').insertOne(req.body);
  });

  res.json({
    status: "success",
    term: req.body
  });
});

app.delete("/guest/:term", (req, res) => {
  console.log(req.params.term);

  MongoClient.connect("mongodb://localhost:27017/kawashopdb", function (err, db) {
    db.collection("kawashop").deleteOne({_id : new mongodb.ObjectID(req.params.term)}, function(err, obj) {
      if (err) throw err;
    });

  });
  
  res.json({
    status: "success",
    removed: req.params.term,
  });
});

app.listen(3000, () => {
  console.log(`Kawa Shop API at http://localhost:3000`);
});
