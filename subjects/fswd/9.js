// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
// Import required modules 
const mysql = require('mysql'); 

// Create a connection to the MySQL server 
const connection = mysql.createConnection({ 
  host: 'localhost', // Change to your MySQL host 
  user: 'root', // Change to your MySQL username 
  password: '', // Change to your MySQL password 
  database: 'my_database' // Change to your MySQL database name 
}); 

// Connect to MySQL server 
connection.connect((err) => { 
  if (err) { 
    console.error('Error connecting to MySQL server: ' + err.stack); 
    return; 
  } 
  console.log('Connected to MySQL server as ID ' + connection.threadId); 
}); 

// Delete record 
const deleteRecord = (id, callback) => { 
  const query = DELETE FROM my_table WHERE id = ?; 
  connection.query(query, [id], (err, results) => { 
    if (err) { 
      console.error('Error deleting record: ' + err.stack); 
      return callback(err);
    } 
    console.log('Record deleted successfully.'); 
    callback(null);
  }); 
}; 

// Select record 
const selectRecord = (id, callback) => { 
  const query = SELECT * FROM my_table WHERE id = ?; 
  connection.query(query, [id], (err, results) => { 
    if (err) { 
      console.error('Error selecting record: ' + err.stack); 
      return callback(err);
    } 
    console.log('Selected record:', results[0]); 
    callback(null, results[0]);
  }); 
}; 

// Select unique records 
const selectUniqueRecords = (callback) => { 
  const query = SELECT DISTINCT name FROM my_table; 
  connection.query(query, (err, results) => { 
    if (err) { 
      console.error('Error selecting unique records: ' + err.stack); 
      return callback(err);
    } 
    console.log('Unique records:', results); 
    callback(null, results);
  }); 
}; 

// Drop table 
const dropTable = (callback) => { 
  const query = DROP TABLE my_table;  
  connection.query(query, (err, results) => { 
    if (err) { 
      console.error('Error dropping table: ' + err.stack); 
      return callback(err);
    } 
    console.log('Table dropped successfully.'); 
    callback(null);
  }); 
}; 

// Execute in sequence
selectRecord(1, (err, record) => {
  if (!record) {
    console.log("Record does not exist. Skipping deletion.");
  } else {
    deleteRecord(1, (err) => {
      if (err) return;
    });
  }

  selectUniqueRecords((err) => {
    if (err) return;
    
    dropTable((err) => {
      if (err) return;
      
      // Close MySQL connection
      connection.end();
      console.log("MySQL connection closed.");
    });
  });
});
  `;
  res.json({ code: codeString });
});

module.exports = router;
