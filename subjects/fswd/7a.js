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
  <title>Vue Directives Example</title>
  <script src="https://unpkg.com/vue@3"></script>
  <style>
    .highlight {
      background-color: yellow;
    }
    .blurred {
      filter: blur(2px);
    }
  </style>
</head>
<body>
  <div id="app">
    <h2 v-uppercase>Click to UPPERCASE me</h2>
    <p v-highlight="'yellow'">Hover to highlight me</p>
    <p v-blur>Hover to blur me</p>
    <p v-focus>This will auto focus</p>
    <button v-click-color="'red'">Click to change my text color</button>
  </div>

  <script>
    const app = Vue.createApp({});

    // Uppercase on click
    app.directive("uppercase", {
      beforeMount(el) {
        el.style.cursor = "pointer";
        el.addEventListener("click", () => {
          el.textContent = el.textContent.toUpperCase();
        });
      }
    });

    // Highlight on hover
    app.directive("highlight", {
      beforeMount(el, binding) {
        const color = binding.value || 'yellow';
        el.addEventListener("mouseenter", () => {
          el.style.backgroundColor = color;
        });
        el.addEventListener("mouseleave", () => {
          el.style.backgroundColor = "";
        });
      }
    });

    // Blur on hover
    app.directive("blur", {
      beforeMount(el) {
        el.addEventListener("mouseenter", () => {
          el.classList.add("blurred");
        });
        el.addEventListener("mouseleave", () => {
          el.classList.remove("blurred");
        });
      }
    });

    // Auto focus
    app.directive("focus", {
      mounted(el) {
        el.setAttribute("tabindex", "0");
        el.focus();
      }
    });

    // Change color on click
    app.directive("click-color", {
      beforeMount(el, binding) {
        el.style.cursor = "pointer";
        el.addEventListener("click", () => {
          el.style.color = binding.value || 'blue';
        });
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
