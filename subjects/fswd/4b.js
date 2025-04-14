// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        input, button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h2>Local Storage Example</h2>
    <input type="text" id="inputText" placeholder="Enter text">
    <button onclick="saveData()">Save</button>
    <button onclick="readData()">Read</button>
    <p><strong>Stored Data:</strong> <span id="outputText"></span></p>

    <script>
        function saveData() {
            let text = document.getElementById("inputText").value;
            localStorage.setItem("storedText", text);
            alert("Data saved!");
        }

        function readData() {
            let storedText = localStorage.getItem("storedText");
            if (storedText) {
                document.getElementById("outputText").innerText = storedText;
            } else {
                alert("No data found!");
            }
        }
    </script>

</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
