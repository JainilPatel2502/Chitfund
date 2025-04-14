// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
const array = [
    [5, 8, 7, 6],
    [1, 3, 4, 2],
    [9, 0, 8, 5],
];

function findMin(arr) {
    let min = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

function findString(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === 'string') {
                return arr[i][j];
            }
        }
    }
    return null;
}

function transpose(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    const transposed = [];

    for (let i = 0; i < cols; i++) {
        transposed[i] = [];
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = arr[j][i];
        }
    }
    return transposed;
}

const fs = require('fs');

const minValue = findMin(array);
const maxValue = findMax(array);
const stringElement = findString(array);
const transposedArray = transpose(array);

const output = '
Original Array: ${JSON.stringify(array)}
Minimum Value: ${minValue}
Maximum Value: ${maxValue}
First String Element: ${stringElement !== null ? stringElement : "None"}
Transposed Array: ${JSON.stringify(transposedArray)}
';

fs.writeFileSync('output.json', output);

console.log(output);
console.log('Results saved to output.json');
  `;
  res.json({ code: codeString });
});

module.exports = router;
