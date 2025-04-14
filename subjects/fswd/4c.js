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
    <title>Drag and Drop API Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .draggable {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000;
            cursor: grab;
        }
        .dropzone {
            width: 150px;
            height: 150px;
            border: 2px dashed #000;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>

    <h2>Drag and Drop Example</h2>
    
    <div id="draggableBox" class="draggable" draggable="true">Drag Me</div>
    <div id="dropZone" class="dropzone">Drop Here</div>

    <script>
        let draggable = document.getElementById("draggableBox");
        let dropZone = document.getElementById("dropZone");

        draggable.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        });

        dropZone.addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        dropZone.addEventListener("drop", function(event) {
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let draggedElement = document.getElementById(data);
            dropZone.appendChild(draggedElement);
        });
    </script>

</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
