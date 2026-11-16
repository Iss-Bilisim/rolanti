import p from 'puppeteer-core';
const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pg=await b.newPage();await pg.setViewport({width:1600,height:900});await pg.goto('http://localhost:8765/dist/page.html?notour#satis');await new Promise(r=>setTimeout(r,1300));
await pg.type('#ara','lastik');await new Promise(r=>setTimeout(r,500));
console.log(await pg.$eval('.pcard .ppin',e=>{const c=getComputedStyle(e);const pr=e.offsetParent;return {pos:c.position,left:c.left,right:c.right,top:c.top,parent:pr&&pr.className,cls:e.className}}));
console.log(await pg.$eval('.pcard',e=>{const c=getComputedStyle(e);return {w:e.getBoundingClientRect().width,pos:c.position,dir:c.direction}}));
await b.close();
