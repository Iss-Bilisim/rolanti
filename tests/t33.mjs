import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
const cdp=await pg.target().createCDPSession();await cdp.send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:'/home/claude/shim/dl2'});
await pg.setViewport({width:1600,height:950});const W=(t)=>new Promise(r=>setTimeout(r,t));
for(const [page,kindIdx] of [['stok',0],['cari',3],['kasa',2],['servis',4]]){
 await pg.goto('http://localhost:8765/dist/page.html?notour&'+page+'#'+page);await W(1100);
 for(const f of [1,2,3,4]){await pg.click('.pghead .tbtn');await W(200);await pg.click('.exfs .exf:nth-child('+f+')');await pg.click('.exw .tbtn.pri');await W(700);}
}
console.log(errs);await b.close();
