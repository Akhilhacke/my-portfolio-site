// ========================================
// AKHIL PORTFOLIO - Clean JavaScript
// ========================================

// ========================================
// Navbar Scroll Animation
// ========================================
let lastScroll = 0;
const nav = document.querySelector('.nav');

if (nav) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for background
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Always show at top
        if (currentScroll <= 50) {
            nav.classList.remove('hidden');
            nav.classList.add('visible');
            lastScroll = currentScroll;
            return;
        }
        
        // Scrolling down - hide header
        if (currentScroll > lastScroll) {
            nav.classList.add('hidden');
            nav.classList.remove('visible');
        } 
        // Scrolling up - show header
        else {
            nav.classList.remove('hidden');
            nav.classList.add('visible');
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        submissions.push({
            ...data,
            date: new Date().toISOString()
        });
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending
        setTimeout(() => {
            // Hide form fields and button
            contactForm.querySelectorAll('.form-row, .form-group').forEach(el => {
                el.style.display = 'none';
            });
            submitBtn.style.display = 'none';
            
            // Show success message
            formSuccess.style.display = 'block';
            
        }, 1500);
    });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when link clicked
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// Console Greeting
// ========================================
console.log('%c🔥 Welcome to Akhil\'s Portfolio!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with passion and creativity 🚀', 'font-size: 14px; color: #ec4899;');
