import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
for(const [w,h,f] of [[1920,1000,'v1'],[1366,768,'v2']]){await pg.setViewport({width:w,height:h});await pg.goto('http://localhost:8765/dist/page.html?notour&'+f+'#satis');await new Promise(r=>setTimeout(r,1300));await pg.screenshot({path:'out/'+f+'.png'});}
const c=await pg.$$('.bcat');await c[7].click();await new Promise(r=>setTimeout(r,300));const n=await pg.$$eval('.pcard',x=>x.length);
await pg.click('.crumb button');await new Promise(r=>setTimeout(r,200));const k=await pg.$$eval('.bcat',x=>x.length);
console.log({n,k,errs});await b.close();
