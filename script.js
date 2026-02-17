// Modern site interactivity: mobile nav, smooth scroll, form handling
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isActive = primaryNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on link click
        primaryNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scrolling for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({behavior: 'smooth', block: 'start'});
                    target.focus({preventScroll:true});
                }
            }
        });
    });

    // Contact form (client-side validation only)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!name) return alert('Please enter your name.');
            if (!emailPattern.test(email)) return alert('Please enter a valid email.');
            if (message.length < 6) return alert('Please enter a longer message.');

            // Placeholder behaviour — replace with real submission later
            alert('Thanks, your message was received. (Demo only)');
            form.reset();
        });
    }

    // Update footer year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
