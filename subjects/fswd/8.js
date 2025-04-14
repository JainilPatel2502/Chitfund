// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
// Import required modules
const mysql = require('mysql');

// Create a connection to MySQL server (without specifying a database)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '' // Change if you have a MySQL password
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL server');

    // Create the database if it doesn't exist
    connection.query('CREATE DATABASE IF NOT EXISTS my_database', (err, results) => {
        if (err) throw err;
        console.log('Database created or already exists');

        // Now, connect to the newly created database
        const dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'my_database'
        });

        dbConnection.connect((err) => {
            if (err) throw err;
            console.log('Connected to MySQL database: my_database');

            // Create a table
            dbConnection.query('CREATE TABLE IF NOT EXISTS my_table (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255)
            )', (err, results) => {
                if (err) throw err;
                console.log('Table created or already exists');

                // Insert multiple records
                const names = ['New', 'new'];
                const insertQuery = 'INSERT INTO my_table (name) VALUES ?';
                const values = names.map(name => [name]);

                dbConnection.query(insertQuery, [values], (err, results) => {
                    if (err) throw err;
                    console.log('Multiple records inserted:', results);

                    // Optional: Update a record
                    dbConnection.query('UPDATE my_table SET name = ? WHERE id = ?', ['New', 1], (err, results) => {
                        if (err) throw err;
                        console.log('Record updated:', results);

                        // Close the database connection
                        dbConnection.end((err) => {
                            if (err) {
                                console.error('Error closing connection: ' + err.stack);
                                return;
                            }
                            console.log('Connection closed');
                        });
                    });
                });
            });
        });
    });
});
  `;
  res.json({ code: codeString });
});

module.exports = router;
