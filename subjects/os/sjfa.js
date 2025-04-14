// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
#include<bits/stdc++.h>
using namespace std;

struct pr{
    string id;
    int at,bt,wt=0,tat=0,d=0;
};

int main() {
    int n;
    cin>>n;
    vector<pr>p(n);
    for(int i=0;i<n;i++) cin>>p[i].id>>p[i].at>>p[i].bt;
    
    int t=0,d=0;
    while(d<n){
        int idx=-1,mn=1e9;
        for(int i=0;i<n;i++){
            if(!p[i].d && p[i].at<=t && p[i].bt<mn){
                mn = p[i].bt, idx = i;
            }
        }
    
        if(idx!=-1){
            t=max(t,p[idx].at);
            p[idx].wt=t-p[idx].at;
            p[idx].tat=p[idx].wt+p[idx].bt;
            t+=p[idx].bt;
            p[idx].d=1;
            d++;
        }else{
            t++;
        }
    }
    
    double awt=0,atat=0;
    
    for(auto &x:p){
        awt+=x.wt;
        atat+=x.tat;
    }
    
    cout<<"Avg WT: "<<(awt/n)<<endl;
    cout<<"Avg TAT: "<<(atat/n)<<endl;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
