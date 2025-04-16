// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
  Here are the *Oracle SQL queries* for the 10 exam questions based on your Bird and BirdSanctuary tables:

---

### *1. Display all birds with sanctuary name and location*
sql
SELECT B.BirdName, BS.SanctuaryName, BS.Location
FROM Bird B
JOIN BirdSanctuary BS ON B.SanctuaryID = BS.SanctuaryID;


---

### *2. Find number of birds in each sanctuary, display only those having more than 3 birds*
sql
SELECT BS.SanctuaryName, COUNT(*) AS BirdCount
FROM Bird B
JOIN BirdSanctuary BS ON B.SanctuaryID = BS.SanctuaryID
GROUP BY BS.SanctuaryName
HAVING COUNT(*) > 3;


---

### *3. Birdnames and species of birds in sanctuaries located in 'Rajasthan'*
sql
SELECT B.BirdName, B.Species
FROM Bird B
JOIN BirdSanctuary BS ON B.SanctuaryID = BS.SanctuaryID
WHERE BS.Location = 'Rajasthan';


---

### *4. Birds whose age is greater than the average age of birds in their sanctuary*
sql
SELECT B.BirdID, B.BirdName, B.Age, B.SanctuaryID
FROM Bird B
WHERE B.Age > (
    SELECT AVG(B2.Age)
    FROM Bird B2
    WHERE B2.SanctuaryID = B.SanctuaryID
);


---

### *5. List all unique species present in Bird table*
sql
SELECT DISTINCT Species FROM Bird;


---

### *6. Find SanctuaryIDs that are present in both tables*
sql
SELECT DISTINCT SanctuaryID
FROM Bird
WHERE SanctuaryID IN (
    SELECT SanctuaryID FROM BirdSanctuary
);


---

### *7. Display bird names and expected lifespan by adding 10 years to current age*
sql
SELECT BirdName, Age, (Age + 10) AS ExpectedLifespan
FROM Bird;


---

### *8. Top 3 oldest birds*
sql
SELECT *
FROM Bird
ORDER BY Age DESC
FETCH FIRST 3 ROWS ONLY;


---

### *9. Names of sanctuaries that do not have any birds assigned*
sql
SELECT SanctuaryName
FROM BirdSanctuary
WHERE SanctuaryID NOT IN (
    SELECT DISTINCT SanctuaryID FROM Bird
);


---

### *10. Increase age of all birds by 1 year who belong to 'Bharatpur Sanctuary'*
sql
UPDATE Bird
SET Age = Age + 1
WHERE SanctuaryID = (
    SELECT SanctuaryID
    FROM BirdSanctuary
    WHERE SanctuaryName = 'Bharatpur Sanctuary'
);


---

Let me know if you’d like the results in a table or need the table creation SQL too!
  `;
  res.json({ code: codeString });
});

module.exports = router;
