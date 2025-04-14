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
    <title>Student Registration Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container-sm bg-info">

    <div class="container mt-5">
        <h2 class="text-center mb-4">Student Registration Form</h2>
        <div class="card shadow p-4">
            <form id="registrationForm">
                <div class="mb-3">
                    <label for="rollNumber" class="form-label">Roll Number</label>
                    <input type="text" class="form-control" id="rollNumber" placeholder="e.g., 23ABC123">
                    <div class="text-danger" id="rollError"></div>
                </div>

                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Enter First Name">
                    <div class="text-danger" id="nameError"></div>
                </div>

                <div class="mb-3">
                    <label for="mobileNumber" class="form-label">Mobile Number</label>
                    <input type="tel" class="form-control" id="mobileNumber" placeholder="Enter 10-digit Mobile Number">
                    <div class="text-danger" id="mobileError"></div>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email ID</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email ID" required>
                    <div class="text-danger" id="emailError"></div>
                </div>

                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" id="address" rows="3" placeholder="Enter Address"></textarea>
                    <div class="text-danger" id="addressError"></div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Gender</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male">
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female">
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                    <div class="text-danger" id="genderError"></div>
                </div>

                <div class="mb-3">
                    <label for="course" class="form-label">Select Course</label>
                    <select class="form-select" id="course">
                        <option value="" selected disabled>Choose Course</option>
                        <option value="CSE">Computer Science (CSE)</option>
                        <option value="ECE">Electronics & Communication (ECE)</option>
                        <option value="ME">Mechanical Engineering (ME)</option>
                        <option value="CE">Civil Engineering (CE)</option>
                        <option value="Other">Other</option>
                    </select>
                    <div class="text-danger" id="courseError"></div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        document.getElementById("registrationForm").addEventListener("submit", function(event) {
            event.preventDefault();

            let isValid = true;

            let rollNumber = document.getElementById("rollNumber").value;
            let rollPattern = /^[0-9]{2}[A-Za-z]{3}[0-9]{3}$/;
            if (!rollPattern.test(rollNumber)) {
                document.getElementById("rollError").innerText = "Invalid Roll Number (Format: 23ABC123)";
                isValid = false;
            } else {
                document.getElementById("rollError").innerText = "";
            }

            let firstName = document.getElementById("firstName").value.trim();
            if (firstName === "") {
                document.getElementById("nameError").innerText = "First Name is required";
                isValid = false;
            } else {
                document.getElementById("nameError").innerText = "";
            }

            let mobileNumber = document.getElementById("mobileNumber").value;
            let mobilePattern = /^[0-9]{10}$/;
            if (!mobilePattern.test(mobileNumber)) {
                document.getElementById("mobileError").innerText = "Mobile number must be 10 digits";
                isValid = false;
            } else {
                document.getElementById("mobileError").innerText = "";
            }

            let address = document.getElementById("address").value.trim();
            if (address === "") {
                document.getElementById("addressError").innerText = "Address is required";
                isValid = false;
            } else {
                document.getElementById("addressError").innerText = "";
            }

            let gender = document.querySelector('input[name="gender"]:checked');
            if (!gender) {
                document.getElementById("genderError").innerText = "Please select gender";
                isValid = false;
            } else {
                document.getElementById("genderError").innerText = "";
            }

            let course = document.getElementById("course").value;
            if (course === "") {
                document.getElementById("courseError").innerText = "Please select a course";
                isValid = false;
            } else {
                document.getElementById("courseError").innerText = "";
            }

            if (isValid) {
                alert("Registration Successful!");
                document.getElementById("registrationForm").reset();
            }
        });
    </script>

</body>
</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
