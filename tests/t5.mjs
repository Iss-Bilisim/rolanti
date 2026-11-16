import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1200));
const t0=Date.now();
for(let i=0;i<6;i++){await pg.mouse.click(345+ (i%3)*190,600);await new Promise(r=>setTimeout(r,60));}
await new Promise(r=>setTimeout(r,400));
const tot=await pg.$eval('.total',e=>e.textContent);
await pg.screenshot({path:'out/g1.png'});
const m=await pg.metrics();
await pg.keyboard.type('rl-40');await new Promise(r=>setTimeout(r,200));const n=await pg.$$eval('.pcard',x=>x.length);
console.log({tot,n,errs,layouts:m.LayoutCount,tasks:m.TaskDuration.toFixed(2)});await b.close();
