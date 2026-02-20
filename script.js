// ================================
// Tina Ramwani Portfolio Script
// FULL WORKING VERSION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Mobile Navigation Toggle
    // =========================

    const navToggle = document.querySelector(".nav-toggle");
    const primaryNav = document.getElementById("primary-navigation");

    if (navToggle && primaryNav) {

        navToggle.addEventListener("click", function () {

            const isActive = primaryNav.classList.toggle("active");

            navToggle.setAttribute("aria-expanded", isActive);

        });


        // Close menu when clicking outside

        document.addEventListener("click", function (e) {

            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {

                primaryNav.classList.remove("active");

                navToggle.setAttribute("aria-expanded", false);

            }

        });


        // Close menu when link clicked

        primaryNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                primaryNav.classList.remove("active");

                navToggle.setAttribute("aria-expanded", false);

            });

        });

    }



    // =========================
    // Smooth Scroll
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });




    // =========================
    // EMAILJS INIT
    // =========================

    emailjs.init("KA_Ip1YUmO5r3vAoe");




    // =========================
    // CONTACT FORM EMAIL SEND
    // =========================

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = form.querySelector("button");

            button.innerText = "Sending...";

            button.disabled = true;



            emailjs.sendForm(

                "service_136t0xl",

                "template_627wrwq",

                form

            )

            .then(function () {

                alert("✅ Message sent successfully!");

                form.reset();

                button.innerText = "Send Message";

                button.disabled = false;

            })

            .catch(function (error) {

                console.error("EmailJS Error:", error);

                alert("❌ Failed to send message");

                button.innerText = "Send Message";

                button.disabled = false;

            });

        });

    }




    // =========================
    // Footer Current Year
    // =========================

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


});