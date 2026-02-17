document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', () => {
			const isOpen = navLinks.classList.toggle('show');
			navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		});

		// Close mobile menu on link click
		document.querySelectorAll('.nav-links a').forEach(a => {
			a.addEventListener('click', () => {
				navLinks.classList.remove('show');
				navToggle.setAttribute('aria-expanded', 'false');
			});
		});

		// Close when clicking outside the nav on small screens
		document.addEventListener('click', (e) => {
			if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
				navLinks.classList.remove('show');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Smooth scroll for anchor links (only when target exists)
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href && href.length > 1) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({behavior: 'smooth', block: 'start'});
				}
			}
		});
	});
});

