import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1920,height:1000});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour&notour#ana');await new Promise(r=>setTimeout(r,1300));await pg.screenshot({path:'out/w1.png'});
await pg.goto('http://localhost:8765/dist/page.html?notour&a=2#satis');await new Promise(r=>setTimeout(r,1300));await pg.screenshot({path:'out/w2.png'});
const c=await pg.$$('.scats .scat');await c[0].click();await new Promise(r=>setTimeout(r,300));const n=await pg.$$eval('.pcard',x=>x.length);
await pg.goto('http://localhost:8765/dist/page.html?notour&a=3#kasa');await new Promise(r=>setTimeout(r,1300));await pg.screenshot({path:'out/w3.png'});
console.log({n,errs});await b.close();
