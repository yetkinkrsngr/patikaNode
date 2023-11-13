// Dosya adı: daireAlan.js

// Komut satırından gelen argümanları al
const args = process.argv.slice(2);

// Yarıçapı al
const yaricap = parseFloat(args[0]);

// Hata kontrolü: Yarıçap bir sayı değilse veya argüman girilmemişse
if (isNaN(yaricap)) {
  console.error("Geçerli bir yarıçap değeri giriniz.");
  process.exit(1);
}

// Alanı hesapla
const alan = Math.PI * Math.pow(yaricap, 2);

// Sonucu konsola yazdır
console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
