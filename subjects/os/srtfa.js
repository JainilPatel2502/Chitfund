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
    int at,bt,rt,wt=0,tat=0;
};

int main() {
    int n;
    cin>>n;
    vector<pr>p(n);
    
    for(int i=0;i<n;i++) cin>>p[i].id>>p[i].at>>p[i].bt,p[i].rt=p[i].bt;
    
    int done=0,t=0;
    
    while(done<n){
        int idx=-1,mn=1e9;
        
        for(int i=0;i<n;i++){
            if(p[i].at<=t && p[i].rt>0 && p[i].rt<mn){
                mn=p[i].rt;
                idx=i;
            }
        }
        
        if(idx==-1){
            t++;
            continue;
        }
        
        p[idx].rt--;
        if(p[idx].rt==0){
            done++;
            int finish=t+1;
            p[idx].tat=finish-p[idx].at;
            p[idx].wt=p[idx].tat-p[idx].bt;
        }
        t++;
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
