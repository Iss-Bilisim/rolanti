import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,200))});
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1200));
const focused=await pg.evaluate(()=>document.activeElement&&document.activeElement.id);
const nav=async i=>{const btns=await pg.$$('nav[aria-label="Ana menü"] button');await btns[i].click();await new Promise(r=>setTimeout(r,300));};
await nav(2); await pg.screenshot({path:'out/sv1.png'});
const rows=await pg.$$('.row2'); await rows[0].click(); await new Promise(r=>setTimeout(r,300)); await pg.screenshot({path:'out/sv2.png'});
// toPay
const btn=await pg.$$('aside.drawer .pay.pri'); if(btn[0]) await btn[0].click(); await new Promise(r=>setTimeout(r,400)); await pg.screenshot({path:'out/sv3.png'});
await nav(3); const t=await pg.$$('.chip'); for(const c of t){const tx=await c.evaluate(e=>e.innerText); if(tx.startsWith('Borçlular')){await c.click();break;}} await new Promise(r=>setTimeout(r,200));
const r2=await pg.$$('.row2'); await r2[0].click(); await new Promise(r=>setTimeout(r,300)); await pg.screenshot({path:'out/ca1.png'});
await nav(4); await pg.screenshot({path:'out/ka1.png', fullPage:false});
console.log({focused,errs});await b.close();
