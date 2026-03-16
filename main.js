document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileIcon = document.querySelector('.mobile-menu-btn i');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            mobileIcon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animateElements = document.querySelectorAll('.fade-in-up, .slide-in, .zoom-in, .reveal-up');
    
    // Animate hero elements immediately on load if they are near top
    document.querySelectorAll('.hero .fade-in-up').forEach(el => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, 100);
    });

    // Observe rest of the elements
    animateElements.forEach(el => {
        if(!el.closest('.hero')) {
            observer.observe(el);
        }
    });
});
