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

    // Fetch documents with filtering, sorting, and limiting
    const query = { age: { $gt: 25 } };  // Fetch only documents where age > 25
    const options = {
      sort: { age: 1 },  // Sort by age in ascending order (use -1 for descending)
      limit: 3           // Limit the results to 3 documents
    };

    const documents = await collection.find(query, options).toArray();
    console.log('Filtered & Sorted Documents:', documents);

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
