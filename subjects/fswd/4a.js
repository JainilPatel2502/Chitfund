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
    <title>Geolocation API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        #output {
            margin-top: 20px;
            font-size: 1.2em;
        }
        button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Geolocation API Example</h1>
    <p>Click the button below to get your current location:</p>
    <button onclick="getLocation()">Get Location</button>
    <div id="output"></div>

    <script>
        function getLocation() {
            const output = document.getElementById("output");
            if (!navigator.geolocation) {
                output.innerHTML = "Geolocation is not supported by your browser.";
                return;
            }

            output.innerHTML = "Locating...";

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    output.innerHTML = '
                        <strong>Location:</strong><br>
                        Latitude: ${latitude}°<br>
                        Longitude: ${longitude}°
                    ';
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            output.innerHTML = "User denied the request for Geolocation.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            output.innerHTML = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            output.innerHTML = "The request to get user location timed out.";
                            break;
                        case error.UNKNOWN_ERROR:
                            output.innerHTML = "An unknown error occurred.";
                            break;
                    }
                }
            );
        }
    </script>
</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
