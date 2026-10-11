const produkList = [
  { nama: "Sepatu Lari", harga: 350000, stok: 12 },
  { nama: "Tas Ransel", harga: 275000, stok: 0 },
  { nama: "Topi", harga: 85000, stok: 5 },
];

const formatProduk = (produk) => {
  const { nama, harga, stok } = produk;

  return `${nama} - Rp.${harga} - (Stok: ${stok})`;
};

console.log(formatProduk(produkList[1]));

const cekStok = (stok) => {
  if (stok > 0) {
    return "stock tersedia";
  } else {
    return "Habis";
  }
};

console.log(cekStok(produkList[1].stok));

produkList.forEach((produk) => {
  const info = formatProduk(produk);
  const status = cekStok(produk.stok);

  console.log(`${info} -> ${status}`);
});

const buah = ["apel", "jeruk", "mangga", "pisang"];
console.log;
