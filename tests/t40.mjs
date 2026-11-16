import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1440,height:900});const W=(t)=>new Promise(r=>setTimeout(r,t));
await pg.goto('http://localhost:8765/dist/page.html?notour#satis');await W(1200);
const m=()=>pg.evaluate(()=>{const r=(s)=>{const e=document.querySelector(s);if(!e)return null;const b=e.getBoundingClientRect();return [Math.round(b.x),Math.round(b.width)]};return {side:r('aside.side'),main:r('main.smain'),rec:r('.receipt'),body:document.documentElement.scrollWidth}});
console.log('0',JSON.stringify(await m()));
await pg.click('.bcat:nth-child(8)');await W(400);
const cards=await pg.$$('.pcard');
for(let i=0;i<8;i++){await cards[i].click();await W(60);console.log(i,JSON.stringify(await m()));}
// sample frames during click
await pg.evaluate(()=>{window._f=[];const t0=performance.now();const tick=()=>{const e=document.querySelector('aside.side').getBoundingClientRect();const mm=document.querySelector('main.smain').getBoundingClientRect();window._f.push([Math.round(e.width),Math.round(mm.x),Math.round(mm.width)]);if(performance.now()-t0<900)requestAnimationFrame(tick)};tick()});
await cards[9].click();await W(1000);console.log(JSON.stringify(await pg.evaluate(()=>[...new Set(window._f.map(x=>x.join(',')))])));
await b.close();
