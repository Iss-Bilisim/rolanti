import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1300));
await pg.screenshot({path:'out/m1.png'});
const before=await pg.$$eval('.ttile b',x=>x.map(e=>e.textContent));
// buy 4 batteries: type aku, enter x4, F9 then 2 (Kart)
await pg.keyboard.type('aku');for(let i=0;i<4;i++){await pg.keyboard.press('Enter');await new Promise(r=>setTimeout(r,60));}
await pg.keyboard.press('Escape');await pg.keyboard.press('F9');await new Promise(r=>setTimeout(r,150));await pg.keyboard.press('2');await new Promise(r=>setTimeout(r,1600));
const after=await pg.$$eval('.ttile b',x=>x.map(e=>e.textContent));
const t=await pg.$$('.ctile');await t[0].click();await new Promise(r=>setTimeout(r,300));const n=await pg.$$eval('.pcard',x=>x.length);
await pg.screenshot({path:'out/m2.png'});
console.log({before,after,n,errs});await b.close();
