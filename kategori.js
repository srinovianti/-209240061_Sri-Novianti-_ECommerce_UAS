/* ----------  Data Produk per Kategori  ---------- */
//  ➜ Tambah/ubah produk di objek ini saja.
const productsByCategory = {
  'Peralatan Sekolah': [
    { name: 'Buku catatan', img: 'IMAGE/Buku catatan.jpg', desc: 'Notebook harian A5.', price: 'Rp10.000', link: 'produk1.html' },
    { name: 'Pensil Mekanik', img: 'IMAGE/Pensil Mekanik.jpg', desc: 'Presisi 0.5 mm untuk menulis & menggambar.', price: 'Rp12.000', link: '#' },
    { name: 'Penghapus', img: 'IMAGE/Penghapus.jpg', desc: 'Penghapus lembut tidak merusak kertas.', price: 'Rp3.000', link: '#' },
    { name: 'Rautan', img: 'IMAGE/Rautan.jpg', desc: 'Rautan dua lubang multifungsi.', price: 'Rp4.000', link: '#' },
    { name: 'Spidol Warna', img: 'IMAGE/Spidol Warna.jpg', desc: 'Spidol aneka warna cerah.', price: 'Rp20.000', link: '#' }
  ],
  'Makanan & Minuman': [
    { name: 'Dimsum', img: 'IMAGE/Dimsum.jpeg', desc: 'Dimsum lezat berbagai isian.', price: 'Rp5.000', link: 'produk2.html' },
    { name: 'Coklat Bar', img: 'IMAGE/Coklat Bar.jpg', desc: 'Coklat manis krimi.', price: 'Rp8.000', link: '#' },
    { name: 'Keripik Kentang', img: 'IMAGE/Keripik Kentang.jpg', desc: 'Keripik renyah rasa BBQ.', price: 'Rp6.000', link: '#' },
    { name: 'Teh Botol', img: 'IMAGE/Teh Botol.jpg', desc: 'Teh melati segar.', price: 'Rp4.000', link: '#' },
    { name: 'Kopi Susu', img: 'IMAGE/Kopi Susu.jpg', desc: 'Kopi susu kekinian.', price: 'Rp10.000', link: '#' }
  ],
  'Aksesoris Handphone': [
    { name: 'Strap Phone', img: 'IMAGE/Strap Phone.jpeg', desc: 'Strap stylish.', price: 'Rp15.000', link: 'produk3.html' },
    { name: 'Case Transparan', img: 'IMAGE/Case Transparan.jpg', desc: 'Case bening anti scratch.', price: 'Rp25.000', link: '#' },
    { name: 'Pop Socket', img: 'IMAGE/Pop Socket.jpg', desc: 'Pegangan HP anti slip.', price: 'Rp12.000', link: '#' },
    { name: 'Gantungan Kamera', img: 'IMAGE/Gantungan Kamera.jpg', desc: 'Pelindung lensa kamera.', price: 'Rp18.000', link: '#' },
    { name: 'Kabel Charger', img: 'IMAGE/Kabel Charger.jpg', desc: 'Kabel fast charging 1 m.', price: 'Rp20.000', link: '#' }
  ],
  'Pakaian & Fashion': [
    { name: 'Hijab', img: 'IMAGE/Hijab.jpeg', desc: 'Hijab segi empat.', price: 'Rp30.000', link: 'produk4.html' },
    { name: 'Kaos Oversize', img: 'IMAGE/Kaos Oversize.jpg', desc: 'Kaos unisex oversize.', price: 'Rp45.000', link: '#' },
    { name: 'Topi Bucket', img: 'IMAGE/Topi Bucket.jpg', desc: 'Topi bucket kekinian.', price: 'Rp35.000', link: '#' },
    { name: 'Tote Bag', img: 'IMAGE/Tote Bag.jpg', desc: 'Tas kain eco‑friendly.', price: 'Rp25.000', link: '#' },
    { name: 'Kacamata Hitam', img: 'IMAGE/Kacamata Hitam.jpg', desc: 'Sunglasses UV protection.', price: 'Rp50.000', link: '#' }
  ],
  'Mainan Anak': [
    { name: 'Monopoli', img: 'IMAGE/Monopoli.jpeg', desc: 'Permainan papan klasik.', price: 'Rp15.000', link: 'produk5.html' },
    { name: 'Puzzle Kayu', img: 'IMAGE/Puzzle Kayu.jpg', desc: 'Puzzle edukatif 3D.', price: 'Rp22.000', link: '#' },
    { name: 'Balok Bangun', img: 'IMAGE/Balok Bangun.jpg', desc: 'Balok warna‑warni kreatif.', price: 'Rp40.000', link: '#' },
    { name: 'Boneka Beruang', img: 'IMAGE/Boneka Beruang.jpg', desc: 'Boneka teddy bear lembut.', price: 'Rp35.000', link: '#' },
    { name: 'Mobil‑mobilan', img: 'IMAGE/Mobil Mainan.jpg', desc: 'Mobil tarik mini.', price: 'Rp12.000', link: '#' }
  ]
};

/* ----------  Util Render  ---------- */
function renderProducts(list, selector) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = '';
  list.forEach((p) => {
    container.insertAdjacentHTML(
      'beforeend',
      `<article>
         <h3>${p.name}</h3>
         <img src="${p.img}" alt="${p.name}" />
         <p>${p.desc}</p>
         <p>Harga: ${p.price}</p>
         <a href="${p.link}">Lihat Detail</a>
       </article>`
    );
  });
}

/* ----------  Kategori Handler  ---------- */
function showProducts(cat) {
  const list = productsByCategory[cat] || [];
  renderProducts(list, '#kategori-products');

  // Set judul & tampilkan section
  document.getElementById('kategori-title').textContent = cat;
  const section = document.getElementById('kategori-section');
  section.style.display = 'block';

  // Scroll mulus ke kategori section
  section.scrollIntoView({ behavior: 'smooth' });
}

/* ----------  Event Binding  ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Klik pada setiap li kategori
  document.querySelectorAll('.kategori ul li[data-cat]')
          .forEach((li) => li.addEventListener('click', () => showProducts(li.dataset.cat)));
});