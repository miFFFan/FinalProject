const menu = document.querySelector('.mobile-nav');
const burgerBtn = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    burgerBtn.classList.toggle('active', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});