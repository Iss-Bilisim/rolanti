import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1300));
await pg.mouse.move(930,480);await new Promise(r=>setTimeout(r,600));
await pg.screenshot({path:'out/h1.png',clip:{x:240,y:130,width:800,height:500}});
console.log(errs);await b.close();
