// Menjalankan kode setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // 1️⃣ Navbar berubah warna saat di-scroll
  var navbar = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "#3c096c";
    } else {
      navbar.style.background = "#2a0e61";
    }
  });

  // 2️⃣ Validasi Formulir Kontak
  var form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var comment = document.getElementById("comment").value;

      if (name === "" || email === "" || comment === "") {
        alert("Semua kolom harus diisi!");
        event.preventDefault(); // Mencegah pengiriman form jika ada yang kosong
      }
    });
  }
});
