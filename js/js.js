document.addEventListener('DOMContentLoaded', function() {
            const burgerMenu = document.getElementById('burgerMenu');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');

            // Открыть/закрыть меню
            function toggleMenu() {
                burgerMenu.classList.toggle('active');
                mobileNav.classList.toggle('active');
                overlay.classList.toggle('active');

                // Блокировка скролла при открытом меню
                if (mobileNav.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }

            // Клик по бургеру
            burgerMenu.addEventListener('click', toggleMenu);

            // Клик по оверлею — закрыть меню
            overlay.addEventListener('click', toggleMenu);

            // Клик по ссылке в мобильном меню — закрыть меню
            const mobileLinks = mobileNav.querySelectorAll('a');
            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    toggleMenu();
                });
            });

            // Закрытие меню при изменении размера окна (если перешли на десктоп)
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    burgerMenu.classList.remove('active');
                    mobileNav.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Закрытие по Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
