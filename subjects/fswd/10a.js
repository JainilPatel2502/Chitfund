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

    // Display documents before deletion
    console.log("Before deletion:");
    console.log(await collection.find({ name: 'Kunj' }).toArray());

    // Delete documents where name = 'John'
    const result = await collection.deleteMany({ name: 'New' });
    console.log(${result.deletedCount} documents deleted.);

    // Display documents after deletion
    console.log("After deletion:");
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
