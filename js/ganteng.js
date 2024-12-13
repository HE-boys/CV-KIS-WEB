// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humbuger menu di pencet
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik untuk menghilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// UNTUK FORM

document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault(); // Mencegah reload halaman setelah submit

  console.log("Form submitted"); // Untuk memastikan form berhasil di-submit

  // Simulasi pengiriman data
  setTimeout(function() {
    const successMessage = document.getElementById("successMessage");

    if (successMessage) {
      console.log("Menampilkan pesan sukses");

      // Menampilkan pesan sukses
      successMessage.style.display = "block";

      // Mereset form setelah pengiriman berhasil
      document.getElementById("contactForm").reset();

      // Menyembunyikan pesan sukses setelah 5 detik (misalnya)
      setTimeout(function() {
        successMessage.style.display = "none"; // Menyembunyikan pesan
        console.log("Pesan sukses disembunyikan");
      }, 5000); // Pesan akan hilang setelah 5 detik
    } else {
      console.error("Elemen pesan sukses tidak ditemukan");
    }
  }, 1000); // Simulasi pengiriman data dalam 1 detik
});

