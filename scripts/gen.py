import os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
import sys,os
tpl=open(os.path.join(ROOT,'src','template.html')).read()
boards=[("Main.dc.html","Satış · dolu sepet","dolu","false",1440,900),
("Bos.dc.html","Satış · boş sepet","bos","false",1440,900),
("SonucYok.dc.html","Satış · sonuç yok","sonuc-yok","false",1440,900),
("StokYok.dc.html","Satış · stokta yok uyarısı","stok-yok","false",1440,900),
("Odeme.dc.html","Satış · ödeme tamamlandı","odeme","false",1440,900),
("Koyu.dc.html","Satış · koyu mod","dolu","true",1440,900),
("Dar1366.dc.html","Satış · 1366×768","dolu","false",1366,768,"kapali")]
os.makedirs(os.path.join(ROOT,'design','project'),exist_ok=True)
for b in boards:
    f,t,s,d,w,h=b[:6]; side=b[6] if len(b)>6 else "acik"
    out=tpl.replace('__TITLE__',t).replace('__SCENE__',s).replace('__DARK__',d).replace('__W__',str(w)).replace('__H__',str(h)).replace('__SIDE__',side)
    open(os.path.join(ROOT,'design','project',f),'w').write(out)
print('ok')
