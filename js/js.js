document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  function toggleMenu() {
    const isActive = burgerMenu.classList.toggle("active");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");

    burgerMenu.setAttribute("aria-expanded", isActive);

    document.body.style.overflow = isActive ? "hidden" : "";
  }

  if (burgerMenu) {
    burgerMenu.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }

  const mobileLinks = mobileNav.querySelectorAll("a");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", toggleMenu);
  });
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth >= 768) {
        burgerMenu.classList.remove("active");
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
        burgerMenu.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    }, 250);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav.classList.contains("active")) {
      toggleMenu();
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
