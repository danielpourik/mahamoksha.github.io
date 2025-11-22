// ==================== HAMBURGER MENU ==================== 
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navbarLeft = document.querySelector('.navbar-left');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar-hamburger') && !event.target.closest('.mobile-menu')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Close menu when window resizes
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// ==================== MODAL FUNCTIONS ==================== 
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function switchModal(fromModal, toModal) {
    closeModal(fromModal);
    setTimeout(() => {
        openModal(toModal);
    }, 300);
}

// ==================== MODAL EVENT LISTENERS ==================== 
// Close modal when clicking on X
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function(e) {
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal when clicking outside the modal-content
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

// ==================== AUTH BUTTONS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const signinBtn = document.querySelector('.signin-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (signinBtn) {
        signinBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('signinModal');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('signupModal');
        });
    }
});

// ==================== FORM SUBMISSIONS ==================== 
document.querySelectorAll('.signup-form, .login-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(this);
        
        // Show success message
        alert('تشکر! درخواست شما ثبت شد. به زودی با شما تماس خواهیم گرفت.');
        
        // Close the modal
        const modal = this.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
        
        // Reset form
        this.reset();
    });
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for modal triggers
        if (href === '#signin' || href === '#signup') {
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== COURSE CARDS ANIMATION ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ==================== KEYBOARD SHORTCUTS ==================== 
document.addEventListener('keydown', function(e) {
    // Press ESC to close any modal
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            closeModal(modal.id);
        });
        // Close inline CTA if open
        const cta = document.getElementById('ctaExpand');
        const toggle = document.querySelector('.cta-toggle');
        if (cta && toggle && cta.classList.contains('open')) {
            cta.classList.remove('open');
            cta.setAttribute('hidden', '');
            cta.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// ==================== CTA EXPANDABLE (INLINE) ====================
document.addEventListener('DOMContentLoaded', function() {
    const ctaToggle = document.querySelector('.cta-toggle');
    const ctaExpand = document.getElementById('ctaExpand');

    if (ctaToggle && ctaExpand) {
        function openExpand() {
            ctaExpand.classList.add('open');
            ctaExpand.removeAttribute('hidden');
            ctaExpand.setAttribute('aria-hidden', 'false');
            ctaToggle.setAttribute('aria-expanded', 'true');
            ctaToggle.classList.add('open');
            // allow the transition to run
            // scroll into view a bit for better UX
            setTimeout(() => ctaExpand.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
        }

        function closeExpand() {
            ctaExpand.classList.remove('open');
            ctaExpand.setAttribute('hidden', '');
            ctaExpand.setAttribute('aria-hidden', 'true');
            ctaToggle.setAttribute('aria-expanded', 'false');
            ctaToggle.classList.remove('open');
        }

        ctaToggle.addEventListener('click', function(e) {
            const isOpen = ctaExpand.classList.contains('open');
            if (isOpen) closeExpand(); else openExpand();
        });

        // keyboard: Enter/Space toggle
        ctaToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                ctaToggle.click();
            }
        });
    }
});

// ==================== UTILITY FUNCTIONS ==================== 
function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Log for debugging
console.log('Website initialized successfully!');
console.log('Theme: Ancient Aryan Knowledge - Updated Color Scheme');
