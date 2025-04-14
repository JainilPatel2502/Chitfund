// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
const fs = require('fs');

function add(c1, c2) {
    return {
        real: c1.real + c2.real,
        imaginary: c1.imaginary + c2.imaginary
    };
}

const i1 = JSON.parse(fs.readFileSync('C1.json', 'utf8'));
const i2 = JSON.parse(fs.readFileSync('C2.json', 'utf8'));

const sum1 = add(i1.complexNumber, i2.complexNumber);

fs.writeFileSync('Sum.json', JSON.stringify(sum1, null, 2));

console.log("Resultant JSON saved to 'Sum.json':", sum1);
  `;
  res.json({ code: codeString });
});

module.exports = router;
