import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1600,height:950});const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.goto('http://localhost:8765/dist/page.html?notour#ana');await W(1300);
const lines=()=>pg.$eval('.receipt',e=>e.innerText.replace(/\n+/g,' | ').slice(0,600));
console.log(await lines());
await pg.click('.hsq');await W(300);console.log(await lines());
await b.close();
