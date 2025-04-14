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
    <title>To-Do List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container-xxl bg-success ">
    <h2 class="text-center">To-Do List</h2>
    <div class="input-group mb-3">
        <input type="text" id="taskInput" class="form-control" placeholder="Enter a task">
        <button class="btn btn-primary" onclick="addTask()">Add</button>
    </div>
    <ul id="taskList" class="list-group"></ul>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = ${taskText} <button class='btn btn-danger btn-sm' onclick='removeTask(this)'>Remove</button>;
            
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function removeTask(button) {
            let toastEl = document.createElement("div");
            toastEl.className = "toast align-items-center text-bg-danger border-0 show";
            toastEl.setAttribute("role", "alert");
            toastEl.innerHTML = '<div class="d-flex"><div class="toast-body">Task removed</div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button></div>';
            
            document.body.appendChild(toastEl);
            new bootstrap.Toast(toastEl).show();
            
            setTimeout(() => {
                toastEl.remove();
                button.parentElement.remove();
            }, 2000);
        }
    </script>
</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
