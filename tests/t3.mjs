import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1200));
await pg.screenshot({path:'out/s0.png'});
await pg.mouse.click(700,600); // click a card -> focus moves to card button
await new Promise(r=>setTimeout(r,200));
await pg.keyboard.type('buji'); await new Promise(r=>setTimeout(r,150));
const v=await pg.$eval('#ara',e=>e.value); 
await pg.keyboard.press('Enter'); await pg.keyboard.press('Escape');
await pg.keyboard.press('ArrowRight'); await pg.keyboard.press('ArrowDown'); await new Promise(r=>setTimeout(r,200));
await pg.screenshot({path:'out/s1.png'});
const cnt=await pg.$eval('aside.cartcol',e=>e.innerText.match(/(\d+) ürün/)?.[1]);
await pg.keyboard.press('F9'); await new Promise(r=>setTimeout(r,500)); const paid=await pg.$eval('aside.cartcol',e=>e.innerText.includes('Ödeme alındı'));
console.log({v,cnt,paid,errs});await b.close();
