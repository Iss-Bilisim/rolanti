import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,800));
for(const [i,n] of [[1,'stok'],[2,'servis'],[3,'cari'],[4,'kasa']]){
 const btns=await pg.$$('nav[aria-label="Ana menü"] button');await btns[i].click();await new Promise(r=>setTimeout(r,350));
 await pg.screenshot({path:`out/p-${n}.png`});}
const btns=await pg.$$('nav[aria-label="Ana menü"] button');await btns[0].click();await new Promise(r=>setTimeout(r,300));await pg.screenshot({path:'out/p-satis.png'});
console.log(errs);await b.close();
