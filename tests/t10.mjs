import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});
await pg.goto('http://localhost:8765/dist/page.html?notour');await new Promise(r=>setTimeout(r,1300));
const c=await pg.evaluate(()=>{const el=document.elementFromPoint(540,500);return [el.className,getComputedStyle(el).cursor];});
const out=await pg.evaluate(()=>{const el=document.elementFromPoint(540,260);return [el.className,getComputedStyle(el).cursor];});
await pg.screenshot({path:'out/c1.png',clip:{x:240,y:130,width:800,height:500}});
console.log(c,out);await b.close();
