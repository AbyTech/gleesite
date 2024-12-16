document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing Effect
    const text = "Welcome to Glee Industrial solution LTD";
    const typedText = document.getElementById('typed-text');
    let charIndex = 0;

    function typeText() {
        if (charIndex < text.length) {
            typedText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});


// picture display
// Add click event listeners to team member images
document.querySelectorAll('.member-image').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalImg = document.createElement('img');
        modalImg.src = this.querySelector('img').src;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.style.display = 'block';
        
        modal.addEventListener('click', function() {
            this.style.display = 'none';
            setTimeout(() => {
                this.remove();
            }, 300);
        });
    });
});
