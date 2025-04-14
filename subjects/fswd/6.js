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
    <title>My Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-blue-50 to-indigo-100 p-6">

    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-300">
        <div class="flex flex-col items-center text-center"> 
            <img src="profile.png" alt="Profile Picture" class="w-28 h-28 rounded-full shadow-md border-4 border-blue-400">
            <h1 class="text-4xl font-bold text-indigo-700 mt-4">Patel Kunj</h1>
            <p class="text-lg text-gray-600">Student</p>
        </div>

        <div class="mt-6 border-t border-gray-300 pt-4">
            <h2 class="text-2xl font-semibold text-blue-700">Personal information</h2>
            <p><strong class="text-indigo-600">Email:</strong> kunj26@gmail.com</p>
            <p><strong class="text-indigo-600">Phone:</strong> +91 6353950785</p>
        
            <p><strong class="text-indigo-600">Address:</strong> at&post madhi , Mehsana, Gujarat, India</p>
        </div>

        <div class="mt-6 border-t border-gray-300 pt-4">
            <h2 class="text-2xl font-semibold text-blue-700">Education</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div class="bg-blue-100 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p class="font-bold text-blue-800">10th Grade</p>
                    <p>Percentage: 98.5%</p>
                </div>
                <div class="bg-blue-100 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p class="font-bold text-blue-800">12th Grade</p>
                    <p>Percentage: 85%</p>
                </div>
            </div>
        </div>

        <div class="mt-6 border-t border-gray-300 pt-4">
            <h2 class="text-2xl font-semibold text-blue-700">Projects</h2>
            <ul class="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong class="text-indigo-600">Real Estate Site:</strong> Developed a responsive website for property transactions.</li>
                <li><strong class="text-indigo-600">California Housing Model:</strong> Predicted housing prices using dataset analysis.</li>
                <li><strong class="text-indigo-600">Weather Data Logger:</strong> Implemented a Java-based system for climate trend analysis.</li>
                <li><strong class="text-indigo-600">AI in Climate Change Research:</strong> Contributed to research on AI solutions for climate action.</li>
            </ul>
        </div>

        <div class="mt-6 border-t border-gray-300 pt-4">
            <h2 class="text-2xl font-semibold text-blue-700">Technical Skills</h2>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md">Java</span>
                <span class="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md">Python</span>
                <span class="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md">C++</span>
                <span class="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md">HTML & CSS</span>
                <span class="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md">Tailwind CSS</span>
            </div>
        </div>
    </div>

</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
