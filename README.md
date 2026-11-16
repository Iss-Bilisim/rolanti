# Rölanti

Motosiklet yedek parça ve servis dükkanları için POS, stok, servis ve cari yazılımı. Bu depo arayüz prototipini içerir: tek dosyalık, tarayıcıda çalışan bir sayfa.

## Ekranlar

- **Ana sayfa:** Satış odaklı. Günlük ciro ve hedef, saat saat satış, ödeme dağılımı, en çok satanlar, son fişler, ödemesi bekleyen servis, veresiye, azalan ürünler.
- **Hızlı satış:** Arama öncelikli satış ekranı. Fotoğraflı kategoriler, hızlı erişim (sabitlenen ürünler ve çok satanlar), fiş, ödeme (F9, 1–4).
- **Ürünler & Stok:** Ürün listesi, ürün detayı, varyasyon yönetimi, hızlı erişime sabitleme, yeni ürün.
- **Servis, Cari, Kasa & Rapor:** İş emirleri, müşteri ve tedarikçi bakiyeleri, kasa özeti.
- **Ayarlar:** İşletme bilgileri, KDV, kritik stok eşiği, günlük hedef, tema, kullanıcılar, dışa aktarma tercihleri, görsel lisansları.
- **Dışa aktarma:** Ürünler, satışlar, kasa, cari ve iş emirleri; Excel (.xlsx), CSV, PDF, JSON.

Veriler tarayıcı hafızasında (localStorage) tutulur.

## Yapı

```
src/template.html        Kaynak: arayüz, mantık ve stiller (Claude Design .dc formatı)
scripts/gen.py           Şablondan 7 tasarım tahtasını üretir (design/project)
scripts/build_page.py    Tek dosyalık sayfayı derler (dist/index.html)
scripts/view.html        Şablonu React'e çeviren dönüştürücü
dist/                    Derlenmiş sayfa ve görseller
design/project/          Tasarım tahtaları
tests/                   Puppeteer uçtan uca testleri
DESIGN.md                Tasarım sistemi (renkler, tipografi, bileşenler)
```

## Derleme

```bash
npm install
python3 scripts/gen.py
python3 scripts/build_page.py
```

## Test

```bash
python3 -m http.server 8765 &
node tests/t7.mjs    # arama, sepet, ödeme
node tests/t30.mjs   # ürün detayı, varyantlar, dışa aktarma
```

Testler `/usr/bin/google-chrome` yolunu kullanır.

## Görseller

Örnek ürün ve kategori fotoğrafları Wikimedia Commons ve rawpixel kaynaklıdır (CC BY-SA, CC0). Lisans listesi uygulamada Ayarlar > Görsel lisansları bölümündedir.
