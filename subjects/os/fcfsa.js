// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
#include<bits/stdc++.h>
using namespace std;

struct Process { string id; int at, bt, wt = 0, tat = 0; };

int main() {
    int n; cin >> n;
    vector<Process> p(n);
    for (int i = 0; i < n; i++) cin >> p[i].id >> p[i].at >> p[i].bt;
    sort(p.begin(), p.end(), [](auto a, auto b){ return a.at < b.at; });

    int t = 0;
    for (int i = 0; i < n; i++) {
        t = max(t, p[i].at);
        p[i].wt = t - p[i].at;
        p[i].tat = p[i].wt + p[i].bt;
        t += p[i].bt;
    }

    double awt = 0, atat = 0;
    for (auto &x : p) awt += x.wt, atat += x.tat;
    cout << "AWT = " << awt / n << "\nATAT = " << atat / n << '\n';
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
