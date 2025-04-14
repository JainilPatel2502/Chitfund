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
    int at,bt,rt,ct=0,wt=0,tat=0;
};

int main(){
    int n,tq,cs;
    cin>>n;
    vector<pr>p(n);
    
    for(int i=0;i<n;i++){
        cin>>p[i].id>>p[i].at>>p[i].bt,p[i].rt=p[i].bt;
    }
    
    cin>>tq>>cs;
    
    sort(p.begin(),p.end(),[](auto a,auto b){return a.at<b.at;});
    queue<int>q;
    int t=p[0].at,i=0;
    
    while(i<n && p[i].at<=t){
        q.push(i++);
    }
    
    while(!q.empty()){
        int idx=q.front();q.pop();
        int run=min(tq,p[idx].rt);
        t+=run;
        p[idx].rt-=run;
        
        while(i<n && p[i].at<=t){
            q.push(i++);
        }
        
        if(p[idx].rt>0){
            if(!q.empty()) t+=cs;
            q.push(idx);
        }else{
            p[idx].ct=t;
            if(!q.empty()) t+=cs;
        }
        
        if(q.empty() && i<n){
            t=max(t,p[idx].at);
            q.push(i++);
        }
    }
    
    
    
    
    double awt=0,atat=0;
    
    for(auto &x:p){
        x.tat=x.ct-x.at;
        x.wt=x.tat-x.bt;
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
