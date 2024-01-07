//toggle icon navbar
document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
});

//scroll section  active link
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    
    //remove toggle icon and navbar when click navbar link (scroll)
    // Misalnya, saat mengklik tautan navbar
    document.querySelector('.navbar a').onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

//scroll reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:100
});

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content .h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'left' });
});


// TYPED JS
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Gamer', 'Sports'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
