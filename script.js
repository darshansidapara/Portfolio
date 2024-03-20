
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
let removenav = document.querySelectorAll('section')

navLinks.forEach(links => {
    links.onclick = () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove('active');
            menuIcon.classList.toggle('fa-xmark');
        }
    }
});

removenav.forEach(links => {
    links.onclick = () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove('active');
            menuIcon.classList.toggle('fa-xmark');
        }
    }
});

navLinks.onclick = () => {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove('active');
    }
}
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
ScrollReveal().reveal('.home-img,  .portfolio-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img, .skills-container', { origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content, .contact form', { origin:'top'});


/******************* typed js *****************/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber', 'Musician'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 900,
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
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    // Remove dark mode styles
    body.classList.add('light-mode');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    // Remove dark mode preference from local storage
    localStorage.setItem('darkMode', null);
}

