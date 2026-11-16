# Rölanti — DESIGN.md

Motosiklet yedek parça ve servis dükkânları için POS + stok + servis. İlk ekran: Satış.
Bu belge sonraki ekranların (Ürünler & Stok, Servis, Cari, Kasa & Rapor) aynı dille yapılması için kaynaktır.

## 1. Dünya ve ilke

- **Sıcak atölye.** Güneş alan, temiz, düzenli bir tezgâh. Zemin kâğıt sıcaklığında, yazı espresso, tek güçlü renk kehribar/bakır.
- **Mod: Operate.** Ekran bir iş aletidir; marka kendini tip, palet, yoğunluk ve tek bir imza hamlesiyle gösterir, yerleşimi ve kontrolleri asla değiştirmez.
- **İmza hamlesi: yakıt göstergesi.** Stok, motor göstergesindeki gibi 4 segmentli bir çubukla gösterilir (bol / az / yok). Logodaki rölanti ibresiyle aynı aileden gelir. Bu hamle başka ekranlarda da yalnızca "doluluk" anlatan yerde kullanılır (servis kuyruğu, kasa limiti); süs olarak kullanılmaz.
- **Renk aksiyondadır.** Kehribar yalnızca birincil aksiyonda (Nakit, Muadili ekle, Yeni ürün ekle), aktif durumda (seçili menü, klavye imlecindeki satır, seçili filtre) ve odak halkasında görünür. Durum renkleri yalnızca anlam taşıdıkları yerde kullanılır.

## 2. Renk token'ları (B · nötr, 16 Kasım 2026 kararı)

İlk sürümdeki krem zemin ve turuncu vurgu, şablon gibi göründüğü için bırakıldı. Arayüz nötr; marka turuncusu yalnızca logoda (ibre) ve bildirim noktasında.

| Rol | Açık | Koyu | Kullanım |
|---|---|---|---|
| `--bg` | `#F4F4F3` | `#111112` | Uygulama zemini |
| `--surface` | `#FFFFFF` | `#1A1A1C` | Kart, fiş paneli, tablolar |
| `--sunk` | `#F1F1F0` | `#202023` | Hover, girdi zemini |
| `--sunk-2` | `#EAEAE8` | `#28282C` | Seçili menü, ikincil düğme |
| `--line` / `--line-2` | `#E6E6E4` / `#D9D9D6` | `#2A2A2E` / `#38383D` | 1px çerçeve ve ayırıcı |
| `--ink` | `#18181B` | `#F4F4F5` | Ana yazı **ve birincil düğme zemini** |
| `--ink-2` | `#5F5F66` | `#A1A1AA` | İkincil yazı (≥4.5:1) |
| `--ink-3` | `#9A9AA0` | `#71717A` | Yalnızca ikon ve pasif |
| `--on-accent` | `#FFFFFF` | `#111112` | Birincil düğme yazısı |
| Marka | `#E0752D` | `#E0752D` | Yalnızca logo ibresi ve bildirim noktası |
| Durum | ok `#1F7A4D`, uyarı `#9A5B00`, hata `#B42318` | `#7CC79A`, `#E8BC62`, `#F08A73` | Yalnızca anlam taşıdığı yerde |

Kurallar
- Ekranda tek birincil düğme olur ve o düğme `--ink` zeminlidir (koyu modda beyaz). Başka hiçbir şey dolu renkle boyanmaz.
- Kartlar 1px `--line` çerçeveli, gölgesiz, 10px köşe. Seçili kart 2px `--ink` çerçeve.
- Ürün fotoğrafı her zaman beyaz zeminde, kırpılmadan (contain).
- Fiyatlar ve tutarlar Onest (tabular rakam); Geist Mono yalnızca plaka, barkod, OEM ve stok kodunda.
- Sürekli hareket eden hiçbir öğe yok; logo ibresi sabit.

## 3. Tipografi

- **Onest** (400/500/600/700): tüm arayüz metni. Türkçe karakterlerle (ğ ş ı İ ö ç ü) test edildi.
- **Geist Mono**, tabular rakamlarla: fiyat, tutar, barkod, OEM numarası, stok adedi, plaka, kısayol rozetleri. Başka hiçbir yerde kullanılmaz.
- Inter / Roboto / Arial yok.

| Token | Boyut / ağırlık | Kullanım |
|---|---|---|
| `type-total` | 38px / 600 mono, -0.03em | Sepet TOPLAM (kısa ekranda 32px) |
| `type-done` | 30px / 600 mono | Ödeme alındı tutarı |
| `type-title` | 19–22px / 600 | Boş/hata durumu başlığı, onay başlığı |
| `type-price` | 19px / 600 mono | Listede satış fiyatı |
| `type-search` | 18px / 500 | Arama kutusu |
| `type-row` | 15.5px / 600 | Ürün adı (liste), müşteri adı |
| `type-body` | 14.5–15px / 400–600 | Menü, sepet satırı, düğmeler |
| `type-label` | 13.5px / 600 ink-2 | Bölüm etiketleri ("Hızlı ürünler") — sentence case, harf aralığı yok |
| `type-meta` | 12–12.5px / 500 | OEM (mono), uyumlu motor etiketi, stok metni |
| `type-kbd` | 11.5px / 500 mono | Kısayol rozeti |

Büyük harfli, harf aralıklı küçük etiket yok. Başlık üstü "eyebrow" yok.

## 4. Boşluk, ölçü, köşe

- Taban birim 4px. Ölçek: 4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 32 · 40 · 56.
- Ekran kenar boşluğu: orta alan 24px, sepet paneli 18–22px.
- Dokunmatik hedef **en az 44px** (miktar −/+, sil, çip, renk noktası 40×44, ödeme düğmeleri 58px).
- Düzen: menü 232px (daraltılmış 76px) · orta alan esnek · sepet `clamp(360px, 28vw, 412px)`.
- Köşe: girdi/düğme 10–12px · liste paneli ve sepet 16–20px · çip ve göstergeler tam yuvarlak/2px · kbd 6px. Şişkin 24px+ köşe yok.

## 5. Gölge ve derinlik

- Dinlenen yüzeyde gölge yok; ayrım ton basamağı (`bg → surface → sunk`) ve 1px sıcak çizgiyle.
- Yalnızca yüzen öğelerde: `--shadow-float: 0 1px 2px rgba(74,48,24,.06), 0 12px 32px -12px rgba(74,48,24,.22)` (popover, komut paleti, toast). Koyu modda siyah tabanlı.
- Arama odakta: 2px kehribar halka + yumuşak sıcak hale.

## 6. Hareket

| Token | Değer | Kullanım |
|---|---|---|
| `--out` | `cubic-bezier(.16,1,.3,1)` | Renk, zemin, opaklık geçişleri (140–200ms) |
| `--spring` | `cubic-bezier(.22,1.2,.36,1)` | Basma (scale .97), satır girişi, rozet, onay tiki (200–420ms) |
| sepet satırı girişi | 320ms spring, 18px sağdan | Ürün eklendiğinde |
| miktar sıçraması | 300ms, scale 1.28 → 1 | +/− |
| satır parlaması | 500ms accent-tint → şeffaf | Eklenen ürünün kartında |
| toplam sayacı | 240ms, ease-out cubic | TOPLAM sayarak değişir |
| onay | tik dairesi 420ms + çizgi çizimi 360ms; 1s ilerleme çubuğu | Ödeme sonrası; 1.15s'de yeni satış |
| rölanti ibresi | 2.8s ease-in-out, ±10° salınım | Yalnızca logoda |

- Yükleniyor animasyonu yok; arama anında süzülür.
- `prefers-reduced-motion: reduce` → tüm animasyon/geçiş 1ms, ibre durur, toplam doğrudan yazılır.

## 7. Bileşen kuralları

- **Arama kutusu:** ekranın en büyük girdisi (60px). Açılışta odakta. Sağda `/` rozeti ve kamera-barkod düğmesi. Barkod okuyucu klavye gibi yazar; tam barkod + Enter = doğrudan sepete.
- **Çip (filtre):** 44px tam yuvarlak. Seçili hali kehribar halka + tint + kaldır (×). Yanında ne yaptığını söyleyen tek satır.
- **Ürün satırı (liste):** kart değil satır. Sütunlar: ad + OEM (mono) + en fazla 2 uyum etiketi ve "+n" · renk noktaları · yakıt göstergesi + adet · fiyat. Tüm satır tıklanır; ayrı "Sepete ekle" ve miktar sayacı yok. Klavye imlecindeki satırda yalnızca küçük bir `↵` rozeti belirir.
- **Varyant:** aynı ürün tek satır; renk noktaları seçilir, tükenen renk çizgili ve sönük.
- **Stok göstergesi:** 4 segment. ≥10 → 4 yeşil, 5–9 → 3 yeşil, 3–4 → 2 sarı, 1–2 → 1 sarı, 0 → kırmızı çerçeveli boş segmentler + "Stokta yok".
- **Satır içi uyarı:** ilgili satırın hemen altında açılır; sorun + çözüm + aksiyon (Muadili ekle / Tedarik listesine yaz / Kapat). Modal kullanılmaz.
- **Sepet satırı:** 1. sıra ad (2 satıra kadar) + satır tutarı; 2. sıra varyant · birim fiyat × adet, sil, miktar sayacı. Sil hover'da/seçiliyken görünür, dokunmatikte her zaman.
- **Ödeme düğmeleri:** 2×2 ızgara, Nakit birincil (kehribar), diğerleri tonal. Her birinde kısayol rozeti. Kısa ekranda (≤820px yükseklik) tek sıra, rozet altta.
- **Müşteri kartı:** ad · plaka (mono rozet) · motor · veresiye bakiyesi. Boşken "Perakende müşteri" + arama girdisi.
- **Popover / komut paleti:** yüzen gölge, 200ms pop. Esc ile kapanır.
- **İkonlar:** tek set, 24 grid, 1.6px çizgi, yuvarlak uç. Emoji yok.
- **Tarayıcı yüzeyleri:** seçim rengi `accent-tint-2`, imleç kehribar, ince sıcak kaydırma çubuğu, odak halkası `--ring`.

## 8. Metin dili

- Doğal, kibar, kısa Türkçe; çalışana "sen" diliyle hitap ("Barkod okut ya da ara").
- Hata = ne oldu + nasıl düzelir ("… şu an stokta yok, sepete eklenmedi. Muadili rafta: …").
- Düğme, yaptığı işin adıdır (Nakit, Beklet, Muadili ekle). İngilizce metin yok.

## 9. Klavye

`/` arama · `↑ ↓` listede gez · `Enter` ekle · `+ −` miktar (seçili ya da son satır) · `Del` satırı sil · `F9` Nakit · `F10` Kart · `F11` Havale · `F12` Veresiye · `Esc` önce açık katmanı, sonra aramayı, sonra filtreyi temizler · `Ctrl K` komut paleti · `?` kısayollar.
