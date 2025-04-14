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
    <title>Vue Custom Directive - Dynamic List</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="app">
        <button @click="addItem">Add Subject</button>
        <ul>
            <li v-list-style v-for="(subject, index) in subjects" :key="index">
                {{ subject }}
            </li>
        </ul>
    </div>

    <script>
        Vue.createApp({
            data() {
                return {
                    subjects: ["OOP", "DSA", "ICC", "ECO", "DE", "FSWD", "DC", "DBMS", "OS", "CA"]
                };
            },
            methods: {
                addItem() {
                    const newSubject = New Subject ${this.subjects.length + 1};
                    this.subjects.push(newSubject);
                }
            },
            directives: {
                "list-style": {
                    beforeMount(el) {
                        el.style.color = "blue";
                        el.style.fontWeight = "bold";
                    }
                }
            }
        }).mount("#app");
    </script>
</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
