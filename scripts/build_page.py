import os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src=open(os.path.join(ROOT,'design','project','Main.dc.html')).read()
x=src[src.index('<x-dc>')+6:src.index('</x-dc>')]
helmet=x[x.index('<helmet>')+8:x.index('</helmet>')]
body=x[x.index('</helmet>')+9:]
style=helmet[helmet.index('<style>'):helmet.index('</style>')+8]
sc=src[src.index('data-dc-script'):];sc=sc[sc.index('>')+1:sc.index('</script>')]
shim=open(os.path.join(ROOT,'scripts','view.html')).read();conv=shim[shim.index('const MAP='):shim.index('(async()=>{')]
react=open(os.path.join(ROOT,'node_modules','react','umd','react.production.min.js')).read()
rdom=open(os.path.join(ROOT,'node_modules','react-dom','umd','react-dom.production.min.js')).read()
html=f'''<!DOCTYPE html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Rölanti · Satış</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap">
{style}
<style>html,body{{margin:0;height:100%}}</style>
<script>{react}</script><script>{rdom}</script>
</head><body><div id="root"></div>
<template id="tpl">{body}</template>
<script>
{conv}
const xdc=document.getElementById('tpl').content;
class DCLogic extends React.Component{{render(){{const v=this.renderVals();return React.createElement(React.Fragment,null,...Array.from(xdc.childNodes).map(n=>conv(n,v)))}}}}
{sc}
window.RL_STANDALONE=true;ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Component,{{scene:'dolu'}}));
setTimeout(()=>{{const el=document.getElementById('ara');el&&el.focus()}},300);
</script></body></html>'''
open(os.path.join(ROOT,'dist','index.html'),'w').write(html);open(os.path.join(ROOT,'dist','page.html'),'w').write(html)
