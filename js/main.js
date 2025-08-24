 const toggleDark = document.getElementById("toggleDark");
    const iconMoon = document.getElementById("icon-moon");
    const iconSun = document.getElementById("icon-sun");

    toggleDark.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      iconMoon.classList.toggle("hidden");
      iconSun.classList.toggle("hidden");
      iconMoon.classList.add("rotate-icon");
      iconSun.classList.add("rotate-icon");
      setTimeout(() => {
        iconMoon.classList.remove("rotate-icon");
        iconSun.classList.remove("rotate-icon");
      }, 600);
    });

    // Animasi fade-up saat discroll
    const faders = document.querySelectorAll('.fade-up');
    window.addEventListener('scroll', () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    });

    // WhatsApp Dynamic
    function openWhatsApp() {
      let number = document.getElementById("waNumber").value.trim();
      if (!number) {
        alert("Masukkan nomor WhatsApp dulu!");
        return;
      }
      let url = `https://wa.me/${number}`;
      window.open(url, "_blank");
    }


 document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // ganti ikon hamburger <-> close
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
    });
  });

