function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId, event) {
    if (event) {
        event.preventDefault();
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = 70;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
        
        closeMobileMenu();
    }
    return false;
}

function initializeNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            const expanded = navMenu.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', expanded.toString());
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const mobileToggle = document.getElementById('mobile-toggle');
    
    if (navMenu && mobileToggle) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
}

function updateNavigationOnScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Update navbar scroll state
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Update active nav link
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.id;
        }
    });
    
    // Update nav link active states
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// DOM Content Loaded event listener
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
    // Throttled scroll listener for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavigationOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    console.log('🚀 BrightPath CH(Ai)SE website foundation loaded successfully');
    console.log('✅ Master navigation fully functional');
    console.log('✅ Mobile menu ready');
    console.log('✅ Smooth scrolling enabled');
    console.log('✅ Active link detection enabled');
    console.log('✅ Hero section with FIXED company branding loaded');
    console.log('✅ Problem section integrated - Step 3.1 COMPLETE');
    console.log('✅ Solution section integrated - Step 3.2 COMPLETE');
    console.log('✅ Methodology section integrated - Step 3.3 COMPLETE');
    console.log('✅ Results section integrated - Step 3.4 COMPLETE');
    console.log('⏳ Ready for Step 3.5: Services Section Integration');
});

// Make functions globally available
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.closeMobileMenu = closeMobileMenu;

// Additional mobile menu enhancement
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const mobileToggle = document.getElementById('mobile-toggle');
    
    // Close mobile menu if clicking outside of it
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// Service-to-Contact Integration Function
function showContactForm(serviceType) {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Pre-fill form based on service type
    setTimeout(() => {
        const interestSelect = document.getElementById('interest');
        const messageField = document.getElementById('message');
        
        if (interestSelect && messageField) {
            switch(serviceType) {
                case 'consultation':
                    interestSelect.value = 'Strategic Consultation';
                    messageField.value = 'I\'m interested in a strategic consultation to discuss how CH(AI)SE methodology could help with our current project challenges.';
                    break;
                case 'implementation':
                    interestSelect.value = 'Full Implementation';
                    messageField.value = 'I\'d like to explore full implementation of CH(AI)SE methodology for our organization.';
                    break;
                case 'training':
                    interestSelect.value = 'Framework Training';
                    messageField.value = 'I\'m interested in CH(AI)SE framework training for our team.';
                    break;
            }
        }
    }, 500); // Small delay to allow scroll to complete
}

// Service-to-Contact Integration Function
function showContactForm(serviceType) {
    // First scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Then scroll specifically to the form area after a brief delay
    setTimeout(() => {
        const formSection = document.querySelector('.contact-form-section');
        if (formSection) {
            formSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }
        
        // Pre-fill form based on service type
        const interestSelect = document.getElementById('interest');
        const messageField = document.getElementById('message');
        
        if (interestSelect && messageField) {
            switch(serviceType) {
                case 'consultation':
                    interestSelect.value = 'consultation';
                    messageField.value = 'I\'m interested in a strategic consultation to discuss how CH(AI)SE methodology could help with our current project challenges.';
                    break;
                case 'implementation':
                    interestSelect.value = 'implementation';
                    messageField.value = 'I\'d like to explore full implementation of CH(AI)SE methodology for our organization.';
                    break;
                case 'training':
                    interestSelect.value = 'training';
                    messageField.value = 'I\'m interested in CH(AI)SE framework training for our team.';
                    break;
            }
        }
    }, 800); // Longer delay to allow initial scroll to complete
}