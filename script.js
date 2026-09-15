/* =========================================================
   WHITE STUDIO CABELEIREIROS — script.js
   Menu mobile, smooth scroll e animações leves ao rolar.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Menu hambúrguer (mobile) ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  function closeMenu() {
    mainNav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", toggleMenu);

    // Fecha o menu ao clicar em um link (navegação por âncora)
    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Fecha o menu se a tela for redimensionada para desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  /* ---------- Animação leve ao rolar a página ---------- */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: exibe tudo imediatamente caso o navegador não suporte
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cabeçalho: leve sombra ao rolar ---------- */
  const header = document.querySelector(".site-header");

  function updateHeaderState() {
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 8px 24px rgba(42, 37, 33, 0.06)";
    } else {
      header.style.boxShadow = "none";
    }
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();
});
