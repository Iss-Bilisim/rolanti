import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1600,height:900});await pg.goto('http://localhost:8765/dist/page.html?notour#satis');await new Promise(r=>setTimeout(r,1300));
await pg.hover('.ttile:nth-child(8)');await pg.click('.ttile:nth-child(8) .tpin');await new Promise(r=>setTimeout(r,180));
const anims=await pg.evaluate(()=>document.getAnimations().length);await pg.screenshot({path:'out/flip.png',clip:{x:240,y:440,width:1040,height:380}});
console.log({anims});await b.close();
