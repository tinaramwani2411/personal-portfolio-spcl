document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navLinks.classList.toggle('show');
		});
	}

	// Close mobile menu on link click
	document.querySelectorAll('.nav-links a').forEach(a => {
		a.addEventListener('click', () => {
			navLinks.classList.remove('show');
		});
	});

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({behavior: 'smooth', block: 'start'});
			}
		});
	});
});

