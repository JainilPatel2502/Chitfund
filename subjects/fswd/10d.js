// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Display documents before update
    console.log("Before update:");
    console.log(await collection.find({ name: 'New' }).toArray());

    // Update documents only if age is less than 30
    const filter = { name: 'New', age: { $lt: 30 } }; 
    const update = { $set: { age: 35, city: 'San Francisco' } }; // Updating multiple fields

    const result = await collection.updateMany(filter, update);
    console.log(${result.modifiedCount} documents updated.);

    // Display documents after update
    console.log("After update:");
    console.log(await collection.find({ name: 'New' }).toArray());

  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

main().catch(console.error);
  `;
  res.json({ code: codeString });
});

module.exports = router;
