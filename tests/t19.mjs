import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.setViewport({width:1600,height:900});await pg.goto('http://localhost:8765/dist/page.html#satis');await new Promise(r=>setTimeout(r,1600));
const titles=[];
for(let i=0;i<9;i++){await new Promise(r=>setTimeout(r,550));titles.push(await pg.$eval('.tour-card h3',e=>e.textContent).catch(()=>null));await pg.screenshot({path:'out/tour'+i+'.png'});await pg.keyboard.press('ArrowRight');}
await new Promise(r=>setTimeout(r,400));const open=await pg.$('.tour');
await pg.reload();await new Promise(r=>setTimeout(r,1500));const again=await pg.$('.tour');
console.log({titles,closed:!open,noAuto:!again,errs});await b.close();
