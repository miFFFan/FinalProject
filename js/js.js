document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    // Открыть/закрыть меню
    function toggleMenu() {
        const isActive = burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Update ARIA attributes
        burgerMenu.setAttribute('aria-expanded', isActive);

        // Блокировка скролла при открытом меню
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    // Клик по бургеру
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMenu);
    }

    // Клик по оверлею — закрыть меню
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Клик по ссылке в мобильном меню — закрыть меню
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', toggleMenu);
    });

    // Закрытие меню при изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 768) {
                burgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                burgerMenu.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }, 250);
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});