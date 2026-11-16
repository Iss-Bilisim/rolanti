import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1920,height:1000});await pg.goto('http://localhost:8765/dist/page.html?notour&notour#satis');await new Promise(r=>setTimeout(r,1300));
const t=()=>pg.$eval('.receipt',e=>e.innerText.match(/₺[\d.,]+(?=\s*\n?\s*İndirim)|Toplam\s*₺[\d.,]+/)?.[0]);
const t0=await t();await pg.hover('.ttile:nth-child(6)');await pg.click('.ttile:nth-child(6) .tpin');await new Promise(r=>setTimeout(r,300));const t1=await t();
await pg.click('.ttile:nth-child(7)');await new Promise(r=>setTimeout(r,300));const t2=await t();console.log({t0,t1,t2});await b.close();
