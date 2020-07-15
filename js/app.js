$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    })
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let links = mobileNav.querySelectorAll("a");
    Array.from(links).forEach(item => {
        item.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        })
    })
    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('open');
    });
    times.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });
})