
/******************* toggle icon navbar ****************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    header.classList.toggle('scroll', navbar.classList.contains('active'));
}

/******************* scroll section active link ****************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /******************* sticky navbar ****************/
    header.classList.toggle('sticky', window.scrollY > 100);
    header.classList.toggle('scroll', navbar.classList.contains('active'));
};


/****************** scroll reveal ****************/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200, 
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'left'});


/******************* typed js *****************/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber', 'Musician'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 800,
    loop: true,
});


/******************* Dark and light mode toggle *****************/

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

// Check local storage for dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode on button click
    if (body.classList.contains('light-mode')) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


function enableDarkMode() {
    // Apply dark mode styles
    body.classList.remove('light-mode');
    darkModeIcon.classList.remove('fa-toggle-on');
    darkModeIcon.classList.add('fa-toggle-off');
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    // Remove dark mode styles
    body.classList.add('light-mode');
    darkModeIcon.classList.remove('fa-toggle-off');
    darkModeIcon.classList.add('fa-toggle-on');
    // Remove dark mode preference from local storage
    localStorage.setItem('darkMode', null);
}

