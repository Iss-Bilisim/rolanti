import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.setViewport({width:1600,height:950});const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.goto('http://localhost:8765/dist/page.html?notour#ana');await W(1300);await pg.screenshot({path:'out/p-ana.png'});
// home sale: type
await pg.keyboard.type('buji');await W(300);await pg.screenshot({path:'out/p-ana2.png'});
await pg.keyboard.press('Enter');await W(300);
const tot=await pg.$eval('.receipt',e=>e.innerText.match(/Toplam\s*₺[\d.,]+/)[0].replace(/\s+/g,' '));
await pg.click('.hsq');await W(200);
const tot2=await pg.$eval('.receipt',e=>e.innerText.match(/Toplam\s*₺[\d.,]+/)[0].replace(/\s+/g,' '));
await pg.keyboard.press('F9');await W(300);const pay=!!(await pg.$('.pstep, [class*="pstep"]'));
await pg.keyboard.press('Escape');await W(200);
// sidebar hover
await pg.mouse.move(30,300);await W(600);await pg.screenshot({path:'out/p-side.png'});
const sw=await pg.$eval('.sidein',e=>e.getBoundingClientRect().width);
await pg.mouse.move(800,300);await W(500);const sw2=await pg.$eval('.sidein',e=>e.getBoundingClientRect().width);
// calendar
await pg.goto('http://localhost:8765/dist/page.html?notour&c#takvim');await W(1200);await pg.screenshot({path:'out/p-cal.png'});
await pg.click('.seg2w .seg2:nth-child(2)');await W(300);await pg.screenshot({path:'out/p-calw.png'});
await pg.click('.seg2w .seg2:nth-child(4)');await W(300);await pg.screenshot({path:'out/p-call.png'});
await pg.click('.seg2w .seg2:nth-child(1)');await W(300);
// new event
await pg.click('.pghead .tbtn.pri');await W(300);await pg.type('.exw input.inp','Test randevusu');await pg.screenshot({path:'out/p-evd.png'});
await pg.click('.exw .pdf .tbtn.pri');await W(300);
const hasEv=await pg.evaluate(()=>document.body.innerText.includes('Test randevusu'));
// drag event to another day
const src=await pg.$('.calm .evc');const cells=await pg.$$('.calm .cmc');
const dt=await pg.evaluateHandle(()=>new DataTransfer());
await src.evaluate((el,dt)=>el.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:dt})),dt);
await cells[30].evaluate((el,dt)=>{el.dispatchEvent(new DragEvent('dragover',{bubbles:true,cancelable:true,dataTransfer:dt}));el.dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:dt}))},dt);await W(300);
const moved=await cells[30].evaluate(e=>e.querySelectorAll('.evc').length);
// assistant
await pg.goto('http://localhost:8765/dist/page.html?notour&a#asistan');await W(1200);await pg.screenshot({path:'out/p-ai.png'});
await pg.click('.aisg');await W(800);await pg.screenshot({path:'out/p-ai2.png'});
console.log({tot,tot2,pay,sw,sw2,hasEv,moved,errs});await b.close();
