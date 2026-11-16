import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1600,height:950});const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.goto('http://localhost:8765/dist/page.html?notour#asistan');await W(1200);await pg.screenshot({path:'out/p-ai.png'});
await pg.click('.theme button:nth-child(2)');await W(300);await pg.screenshot({path:'out/p-aid.png'});
await b.close();
