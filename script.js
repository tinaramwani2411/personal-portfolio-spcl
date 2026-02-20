// Modern site interactivity
document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // Mobile Navigation
    // =========================
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isActive = primaryNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        document.addEventListener('click', (e) => {
            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        primaryNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // =========================
    // Smooth Scrolling
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // =========================
    // EmailJS Initialization (guarded)
    // =========================
    // if (window.emailjs && typeof emailjs.init === 'function') {
    //     try {
    //         emailjs.init("KA_Ip1YUmO5r3vAoe");
    //     } catch (err) {
    //         console.error('EmailJS init failed:', err);
    //     }
    // } else {
    //     console.warn('EmailJS SDK not available. Contact form will use fallback.');
    // }

    // =========================
// EmailJS Initialization (FIX)
// =========================
if (window.emailjs) {

    emailjs.init({
        publicKey: "KA_Ip1YUmO5r3vAoe"
    });

}

    // =========================
    // Contact Form
    // =========================
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name) return alert('Please enter your name.');
            if (!emailPattern.test(email)) return alert('Please enter a valid email.');
            if (message.length < 6) return alert('Please enter a longer message.');

            if (window.emailjs && typeof emailjs.send === 'function') {
                emailjs.send("service_136t0xl", "template_627wrwq", {
                    from_name: name,
                    from_email: email,
                    message: message,
                })
                .then(() => {
                    alert("Message sent successfully! ✅");
                    form.reset();
                })
                .catch((error) => {
                    alert("Failed to send message ❌");
                    console.error("EmailJS Error:", error);
                });
            } else {
                // Fallback: open user's mail client with prefilled mailto
                const to = 'tinaramwani@email.com';
                const subject = `Contact from ${name}`;
                const body = `${message}%0D%0A%0D%0AFrom: ${name} <${email}>`;
                window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${body}`;
                alert('Email service unavailable — opening email client as fallback.');
                form.reset();
            }
        });
    }

    // =========================
    // Footer Year
    // =========================
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});