import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.setViewport({width:1600,height:950});const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.goto('http://localhost:8765/dist/page.html?notour#ayarlar');await W(1300);await pg.screenshot({path:'out/n-ayar.png'});
// change branch and low stock, check header
const ins=await pg.$$('.setc input.inp');await ins[2].click({clickCount:3});await pg.keyboard.type('Moda Şubesi');await W(200);
const hdr=await pg.$eval('.gsearch',e=>e.parentElement.innerText.slice(0,60));
await pg.reload();await W(1200);const hdr2=await pg.evaluate(()=>document.body.innerText.includes('Moda Şubesi'));
await pg.evaluate(()=>document.querySelector('.pg.scroll').scrollTo(0,9999));await W(200);await pg.screenshot({path:'out/n-ayar2.png'});
// dark theme
await pg.goto('http://localhost:8765/dist/page.html?notour&d#ana');await W(1200);
console.log({hdr,hdr2,errs});await b.close();
