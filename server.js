// server.js
const express = require("express");
const app = express();

// Import routers for different subjects/routes
const os_p1 = require("./subjects/os/p1");
const os_p2 = require("./subjects/os/p2");
const os_p3 = require("./subjects/os/p3");
const os_p4 = require("./subjects/os/p4");
const os_p5 = require("./subjects/os/p5");
const os_p6 = require("./subjects/os/p6");
const os_p7 = require("./subjects/os/p7");
const os_p8 = require("./subjects/os/p8");
const os_p9 = require("./subjects/os/p9");
const os_p10 = require("./subjects/os/p10");
const rr = require("./subjects/os/rr");
const sjf = require("./subjects/os/sjf");
const srtf = require("./subjects/os/srtf");
const fcfsa = require("./subjects/os/fcfsa");
const sjfa = require("./subjects/os/sjfa");
const srtfa = require("./subjects/os/srtfa");
const rra = require("./subjects/os/rra");

const dc_p1 = require("./subjects/dc/p1");
const dc_p2 = require("./subjects/dc/p2");
const dc_p3 = require("./subjects/dc/p3");
const dc_p4 = require("./subjects/dc/p4");
const dc_p5 = require("./subjects/dc/p5");
const dc_p6 = require("./subjects/dc/p6");
const dc_p7 = require("./subjects/dc/p7");
const dc_p8 = require("./subjects/dc/p8");
const dc_p9 = require("./subjects/dc/p9");
const dc_p10 = require("./subjects/dc/p10");

const fs3 = require("./subjects/fswd/3");
const fs4a = require("./subjects/fswd/4a");
const fs4b = require("./subjects/fswd/4b");
const fs4c = require("./subjects/fswd/4c");
const fs5a = require("./subjects/fswd/5a");
const fs5b = require("./subjects/fswd/5b");
const fs5c = require("./subjects/fswd/5c");
const fs6 = require("./subjects/fswd/6");
const fs7a = require("./subjects/fswd/7a");
const fs7b = require("./subjects/fswd/7b");
const fs7c = require("./subjects/fswd/7c");
const fs8 = require("./subjects/fswd/8");
const fs9 = require("./subjects/fswd/9");
const fs10a = require("./subjects/fswd/10a");
const fs10b = require("./subjects/fswd/10b");
const fs10c = require("./subjects/fswd/10c");
const fs10d = require("./subjects/fswd/10d");
const fsadd = require("./subjects/fswd/add");
const fsmat = require("./subjects/fswd/matrix");

const db1 = require("./subjects/db/1");

// Mount the routers on the corresponding base paths
app.use("/os/p1", os_p1);
app.use("/os/p2", os_p2);
app.use("/os/p3", os_p3);
app.use("/os/p4", os_p4);
app.use("/os/p5", os_p5);
app.use("/os/p6", os_p6);
app.use("/os/p7", os_p7);
app.use("/os/p8", os_p8);
app.use("/os/p9", os_p9);
app.use("/os/p10", os_p10);
app.use("/os/rr", rr);
app.use("/os/rra", rra);
app.use("/os/sjf", sjf);
app.use("/os/sjfa", sjfa);
app.use("/os/srtf", srtf);
app.use("/os/srtfa", srtfa);
app.use("/os/fcfsa", fcfsa);

app.use("/dc/p1", dc_p1);
app.use("/dc/p2", dc_p2);
app.use("/dc/p3", dc_p3);
app.use("/dc/p4", dc_p4);
app.use("/dc/p5", dc_p5);
app.use("/dc/p6", dc_p6);
app.use("/dc/p7", dc_p7);
app.use("/dc/p8", dc_p8);
app.use("/dc/p9", dc_p9);
app.use("/dc/p10", dc_p10);

app.use("/fs/3", fs3);
app.use("/fs/4a", fs4a);
app.use("/fs/4b", fs4b);
app.use("/fs/4c", fs4c);
app.use("/fs/5a", fs5a);
app.use("/fs/5b", fs5b);
app.use("/fs/5c", fs5c);
app.use("/fs/6", fs6);
app.use("/fs/7a", fs7a);
app.use("/fs/7b", fs7b);
app.use("/fs/7c", fs7c);
app.use("/fs/8", fs8);
app.use("/fs/9", fs9);
app.use("/fs/10a", fs10a);
app.use("/fs/10b", fs10b);
app.use("/fs/10c", fs10c);
app.use("/fs/10d", fs10d);
app.use("/fs/add", fsadd);
app.use("/fs/matrix", fsmat);

app.use("/db/1", db1);

// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Express backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
