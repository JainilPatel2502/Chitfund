// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tony Stark - Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 1em 0;
            text-align: center;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        header .left-section {
            display: flex;
            align-items: center;
        }

        header .name {
            font-size: 24px;
            font-weight: bold;
            margin-left: 20px;
        }

        header .title {
            font-size: 16px;
            color: #ddd;
            margin-left: 10px;
        }

        header img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-left: 20px;
        }

        nav {
            display: flex;
            gap: 20px;
            margin-right: 20px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
        }

        nav a {
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 25px;
        transition: background 0.6s;
        }

        nav a:hover {
        background-color: #5dc3dd;
        }

        .container {
            max-width: 900px;
            margin: 120px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .section {
            margin-bottom: 40px;
        }

        .section h2 {
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 20px;
        }

        .profile-image {
            float: right;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-left: 20px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin-bottom: 10px;
        }
        @media (max-width: 800px) {
            .container{
                background-color: #83cafd;
            }
        }
        
    </style>
</head>
<body>

<header>
    <div class="left-section">
        <img src="" alt="Tony Stark">
        <div>
            <div class="name">Mit</div>
            <div class="title">Tech Specialist</div>
        </div>
    </div>
    <nav>
        <a href="#contacts">Contacts</a>
        <a href="#about">About Me</a>
        <a href="#work">Work Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
    </nav>
</header>

<div class="container">
    <section id="contacts" class="section">
        <h2>Contacts</h2>
        <p><strong>Phone:</strong> +1-202-555-0173</p>
        <p><strong>Email:</strong> tonystark@starkindustries.com</p>
        <p><strong>Address:</strong> Malibu, California, Malibu, 90265, USA</p>
    </section>

    <section id="about" class="section">
        <h2>About Me</h2>
        <p>Innovative tech specialist with over 25 years of experience in leading a tech company and developing cutting-edge technology. Expert in Artificial Intelligence, Robotics, Leadership, and Innovation.</p>
    </section>

    <section id="work" class="section">
        <h2>Work Experience</h2>
        <h3>CEO, Stark Industries, Los Angeles</h3>
        <p><em>Jan 2000 - Dec 2020</em></p>
        <ul>
            <li>Led the company to become a global leader in tech industry.</li>
            <li>Pioneered in creating advanced weapon systems.</li>
        </ul>

        <h3>Lead Engineer, Stark Industries, Los Angeles</h3>
        <p><em>Jan 1995 - Dec 1999</em></p>
        <ul>
            <li>Developed cutting-edge technology and products.</li>
            <li>Managed a team of highly skilled engineers.</li>
        </ul>
    </section>

    <section id="education" class="section">
        <h2>Education</h2>
        <h3>Master's in Electrical Engineering, MIT, Cambridge</h3>
        <p><em>1992</em></p>
        <ul>
            <li>Specialized in Artificial Intelligence and Robotics.</li>
            <li>Graduated with top honors.</li>
        </ul>
    </section>

    <section id="skills" class="section">
        <h2>Skills</h2>
        <ul>
            <li>Artificial Intelligence</li>
            <li>Robotics</li>
            <li>Leadership</li>
            <li>Innovation</li>
        </ul>
    </section>
</div>

</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
