// ===============================
// Mobile Navbar Toggle
// ===============================

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Accessibility toggle
        const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
        navToggle.setAttribute("aria-expanded", !expanded);
    });
}


// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email regex pattern
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}
