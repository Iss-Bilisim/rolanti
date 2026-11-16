import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();pg.on('pageerror',e=>console.log('E',e.message));
await pg.setViewport({width:1600,height:900});await pg.goto('http://localhost:8765/dist/page.html?notour#satis');await new Promise(r=>setTimeout(r,1200));
await pg.click('button[title="Tanıtım turu"]');await new Promise(r=>setTimeout(r,800));
console.log(await pg.evaluate(()=>[document.querySelectorAll('.tour').length,document.querySelectorAll('.tour-card').length]));
await b.close();
