import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.setViewport({width:1366,height:768});await pg.goto('http://localhost:8765/dist/page.html?notour#satis');await W(1300);await pg.screenshot({path:'out/n-1366.png'});
await pg.click('.theme button:nth-child(2)').catch(()=>{});await W(300);await pg.goto('http://localhost:8765/dist/page.html?notour&q#stok');await W(1000);
await pg.evaluate(()=>{});await pg.click('.theme button:nth-child(2)').catch(()=>{});await W(300);
const rows=await pg.$$('.tr.trc');await rows[8].click();await W(500);await pg.screenshot({path:'out/n-dark.png'});
console.log(errs);await b.close();
