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
    <title>Vue Custom Directive - Date Format</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="app">
        <p v-format-date="date">Original Date: {{ date }}</p>
    </div>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    date: new Date().toISOString()
                };
            },
            directives: {
                formatDate: {
                    beforeMount(el, binding) {
                        const date = new Date(binding.value);
                        el.textContent = Formatted Date: ${date.toDateString()};
                    }
                }
            }
        });

        app.mount("#app");
    </script>
</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
