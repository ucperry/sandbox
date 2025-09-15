/* ===== Scripts from navigation.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, All Sections
        ======================================== */
        
        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault(); // Prevent the default anchor jump
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        
        closeMobileMenu();
        return false; // This also prevents default
}

        /* ========================================
           NAVIGATION - Mobile Menu Functions
        ======================================== */
        
        function initializeNavigation() {
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            // Mobile menu toggle
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', function() {
                    toggleMobileMenu();
                });
                
                // Close mobile menu when clicking overlay
                mobileOverlay.addEventListener('click', function() {
                    closeMobileMenu();
                });
                
                // Handle escape key
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
                        closeMobileMenu();
                    }
                });
            }
            
            // Close mobile menu when clicking nav links
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                });
            });
            
            // Keyboard navigation for logo
            const logo = document.querySelector('.logo');
            if (logo) {
                logo.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        scrollToTop();
                    }
                });
            }
            
            // Keyboard navigation for mobile toggle
            if (mobileToggle) {
                mobileToggle.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        toggleMobileMenu();
                    }
                });
            }
        }

        function toggleMobileMenu() {
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');
            
            const isOpen = navMenu.classList.contains('open');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }

        function openMobileMenu() {
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');
            
            mobileToggle.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            navMenu.classList.add('open');
            mobileOverlay.classList.add('active');
            mobileOverlay.style.display = 'block';
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Focus first menu item
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 300);
            }
        }

        function closeMobileMenu() {
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');
            
            if (mobileToggle && navMenu && mobileOverlay) {
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
                mobileOverlay.classList.remove('active');
                
                // Allow body scroll
                document.body.style.overflow = '';
                
                setTimeout(() => {
                    mobileOverlay.style.display = 'none';
                }, 300);
            }
        }

        /* ========================================
           NAVIGATION - Scroll Effects & Active States
        ======================================== */
        
        function updateNavigationOnScroll() {
            const navbar = document.getElementById('navbar');
            const sections = document.querySelectorAll('main section, main div[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            // Add/remove scrolled class for navbar styling
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active navigation link
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

        /* ========================================
           NAVIGATION - Initialization
        ======================================== */
        
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
            
            console.log('🚀 Streamlined navigation with baseline alignment initialized successfully');
        });

        // Make functions globally available
        window.scrollToSection = scrollToSection;
        window.scrollToTop = scrollToTop;
        window.closeMobileMenu = closeMobileMenu;
    

/* ===== Scripts from hero.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // HERO SECTION INTERACTIONS
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add enhanced hover interactions
            document.querySelectorAll('.cta-option').forEach(option => {
                option.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 20px 50px rgba(255, 224, 102, 0.4)';
                });
                
                option.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px) scale(1)';
                    this.style.boxShadow = '0 15px 40px rgba(255, 224, 102, 0.3)';
                });
            });

            // Add hover interactions for project boxes
            document.querySelectorAll('.hero-box').forEach(box => {
                box.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                });
                
                box.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });

            console.log('🏠 Hero section loaded - updated with tighter spacing');
        });
    

/* ===== Scripts from problem.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // PROBLEM STATEMENT SECTION INTERACTIONS
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all problem boxes for animation
            document.querySelectorAll('.problem-box').forEach(box => {
                box.style.animationPlayState = 'paused';
                observer.observe(box);
            });

            // Analytics and performance monitoring
            if (window.performance && window.performance.mark) {
                window.performance.mark('problem-section-loaded');
                
                setTimeout(() => {
                    window.performance.mark('problem-section-interactive');
                    window.performance.measure('problem-section-load-time', 'problem-section-loaded', 'problem-section-interactive');
                }, 100);
            }

            console.log('🚨 Problem Statement section loaded - identifying traditional development challenges');
        });

        // Export functions for potential integration
        window.scrollToProblem = function() {
            document.getElementById('problem').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };
    

/* ===== Scripts from solution.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // SOLUTION SECTION INTERACTIONS
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.mbp-pillar, .benefit-item').forEach(element => {
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });

            // Add enhanced hover interactions for MBP pillars
            document.querySelectorAll('.mbp-pillar').forEach(pillar => {
                pillar.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 15px 40px rgba(255, 224, 102, 0.2)';
                });
                
                pillar.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px) scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                });
            });

            // Analytics and performance monitoring
            if (window.performance && window.performance.mark) {
                window.performance.mark('solution-section-loaded');
                
                setTimeout(() => {
                    window.performance.mark('solution-section-interactive');
                    window.performance.measure('solution-section-load-time', 'solution-section-loaded', 'solution-section-interactive');
                }, 100);
            }

            console.log('💡 Solution Introduction section loaded - presenting CH(Ai)SE framework advantages');
        });

        // Export functions for potential integration
        window.scrollToSolution = function() {
            document.getElementById('solution').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };
    

/* ===== Scripts from methodology.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // METHODOLOGY SECTION INTERACTIONS
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.phase-card, .principle-card, .pillar-card').forEach(element => {
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });

            // Add enhanced hover interactions for principle cards
            document.querySelectorAll('.principle-card').forEach((card, index) => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 15px 40px rgba(255, 224, 102, 0.3)';
                    
                    // Add a subtle glow effect
                    this.style.borderColor = 'var(--primary-gold)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px) scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(255, 224, 102, 0.2)';
                    this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                });

                // Add click interaction for principles
                card.addEventListener('click', function() {
                    // Simple feedback for principle interaction
                    this.style.transform = 'translateY(-10px) scale(1.03)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-5px) scale(1)';
                    }, 200);
                    
                    console.log(`Principle ${index + 1} clicked: ${this.querySelector('.principle-title').textContent}`);
                });
            });

            // Add enhanced hover interactions for phase cards
            document.querySelectorAll('.phase-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                    this.style.boxShadow = '0 15px 40px rgba(75, 144, 226, 0.2)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                });
            });

            // Add enhanced hover interactions for pillar cards
            document.querySelectorAll('.pillar-card').forEach((card, index) => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                    
                    // Different glow colors for each pillar
                    const glowColors = [
                        'rgba(255, 224, 102, 0.3)', // Gold for Methodology
                        'rgba(75, 144, 226, 0.3)',  // Blue for STAR
                        'rgba(107, 142, 35, 0.3)'   // Green for Playbook
                    ];
                    this.style.boxShadow = `0 15px 40px ${glowColors[index]}`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                });
            });

            // Analytics and performance monitoring
            if (window.performance && window.performance.mark) {
                window.performance.mark('methodology-section-loaded');
                
                setTimeout(() => {
                    window.performance.mark('methodology-section-interactive');
                    window.performance.measure('methodology-section-load-time', 'methodology-section-loaded', 'methodology-section-interactive');
                }, 100);
            }

            console.log('⚙️ Methodology Deep Dive section loaded - presenting complete CH(Ai)SE framework');
        });

        // Export functions for potential integration
        window.scrollToMethodology = function() {
            document.getElementById('methodology').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        // Principle interaction function for potential expansion
        window.showPrincipleDetails = function(principleNumber) {
            console.log(`Showing details for principle ${principleNumber}`);
            // This could be expanded to show detailed principle information
        };
    

/* ===== Scripts from services.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // SERVICES SECTION INTERACTIONS
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.service-card, .process-step, .engagement-option').forEach(element => {
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });

            // Add enhanced hover interactions for service cards
            document.querySelectorAll('.service-card').forEach((card, index) => {
                card.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('featured')) {
                        this.style.transform = 'translateY(-10px) scale(1.02)';
                        this.style.boxShadow = '0 25px 60px rgba(255, 224, 102, 0.4)';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('featured')) {
                        this.style.transform = 'translateY(-8px) scale(1)';
                        this.style.boxShadow = '0 20px 50px rgba(255, 224, 102, 0.3)';
                    }
                });

                // Add click interaction for service cards
                card.addEventListener('click', function() {
                    console.log(`Service card clicked: ${this.querySelector('.service-name').textContent}`);
                });
            });

            // Add enhanced hover interactions for process steps
            document.querySelectorAll('.process-step').forEach(step => {
                step.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.querySelector('.step-number').style.transform = 'scale(1.1)';
                });
                
                step.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.querySelector('.step-number').style.transform = 'scale(1)';
                });
            });

            // Add enhanced hover interactions for engagement options
            document.querySelectorAll('.engagement-option').forEach(option => {
                option.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                    this.style.boxShadow = '0 15px 40px rgba(255, 224, 102, 0.3)';
                });
                
                option.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                });
            });

            // Add service button click tracking
            document.querySelectorAll('.service-button').forEach(button => {
                button.addEventListener('click', function(e) {
                    const serviceName = this.closest('.service-card').querySelector('.service-name').textContent;
                    const buttonText = this.textContent;
                    console.log(`Service CTA clicked: ${serviceName} - ${buttonText}`);
                    
                    // Add visual feedback
                    this.style.transform = 'translateY(-4px)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-2px)';
                    }, 150);
                });
            });

            // Analytics and performance monitoring
            if (window.performance && window.performance.mark) {
                window.performance.mark('services-section-loaded');
                
                setTimeout(() => {
                    window.performance.mark('services-section-interactive');
                    window.performance.measure('services-section-load-time', 'services-section-loaded', 'services-section-interactive');
                }, 100);
            }

            console.log('🤝 Services section loaded - presenting CH(Ai)SE engagement options');
        });

        // Export functions for potential integration
        window.scrollToServices = function() {
            document.getElementById('services').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        // Service selection function for potential form integration
        window.selectService = function(serviceType) {
            console.log(`Service selected: ${serviceType}`);
            // This could be expanded to pre-fill contact forms
        };

        // Process step details function for potential expansion
        window.showProcessDetails = function(stepNumber) {
            console.log(`Showing details for process step ${stepNumber}`);
            // This could be expanded to show detailed process information
        };
    

/* ===== Scripts from contact.html ===== */

        /* ========================================
           SHARED FUNCTIONS - Used in: Navigation, Hero, All Sections
        ======================================== */
        
        // Scroll to section function
        function scrollToSection(sectionId, event) {
            if (event) {
                event.preventDefault();
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            return false;
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========================================
        // CONTACT SECTION INTERACTIONS
        // ========================================
        
        // Show contact form with pre-selected service
        function showContactForm(serviceType) {
            const interestSelect = document.getElementById('interest');
            const messageTextarea = document.getElementById('message');
            const nameInput = document.getElementById('name');
            
            // Pre-select the interest
            if (interestSelect) {
                interestSelect.value = serviceType;
            }
            
            // Pre-fill message based on service type
            if (messageTextarea) {
                let messageTemplate = '';
                switch(serviceType) {
                    case 'consultation':
                        messageTemplate = 'I\'m interested in a strategic consultation to discuss how CH(Ai)SE can help with my current project challenges. I\'d like to explore: ';
                        break;
                    case 'implementation':
                        messageTemplate = 'I\'m ready for a full CH(Ai)SE implementation starting with rapid MVP development. My project details: ';
                        break;
                    case 'training':
                        messageTemplate = 'I\'m interested in CH(Ai)SE team training and certification for my organization. Our team size and goals: ';
                        break;
                    default:
                        messageTemplate = 'I\'m interested in learning more about CH(Ai)SE methodology. My current situation: ';
                }
                messageTextarea.value = messageTemplate;
                
                // Position cursor at the end
                setTimeout(() => {
                    messageTextarea.focus();
                    messageTextarea.setSelectionRange(messageTemplate.length, messageTemplate.length);
                }, 100);
            }
            
            // Smooth scroll to form
            document.querySelector('.contact-form-section').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Focus on name field if empty
            setTimeout(() => {
                if (nameInput && !nameInput.value) {
                    nameInput.focus();
                }
            }, 800);
        }

        // Handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const submitButton = form.querySelector('.submit-button');
            const messageDiv = document.getElementById('form-message');
            
            // Get form data
            const formData = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                company: form.company.value.trim(),
                interest: form.interest.value,
                message: form.message.value.trim()
            };
            
            // Validate required fields
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.classList.add('loading');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';
            
            // Simulate form submission
            setTimeout(() => {
                // Success response
                showMessage('Thank you for your interest in CH(Ai)SE! We\'ll be in touch within 24 hours to discuss your project and how we can help achieve 920% ROI.', 'success');
                form.reset();
                
                // Track conversion
                console.log('CH(Ai)SE contact form submitted:', formData);
                
                // Reset button
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                
            }, 2000);
        }
        
        // Email validation
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Show form message
        function showMessage(message, type) {
            const messageDiv = document.getElementById('form-message');
            messageDiv.textContent = message;
            messageDiv.className = `form-message ${type}`;
            messageDiv.style.display = 'block';
            
            // Auto-hide success messages after 10 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 10000);
            }
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // ========================================
        // PAGE INITIALIZATION
        // ========================================
        
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll-triggered animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.cta-option, .contact-form-section, .contact-info').forEach(element => {
                element.style.animationPlayState = 'paused';
                observer.observe(element);
            });

            // Add enhanced hover interactions for CTA options
            document.querySelectorAll('.cta-option').forEach((option, index) => {
                option.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                    this.style.boxShadow = '0 25px 60px rgba(255, 224, 102, 0.4)';
                });
                
                option.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-8px) scale(1)';
                    this.style.boxShadow = '0 20px 50px rgba(255, 224, 102, 0.3)';
                });

                // Add click tracking
                option.addEventListener('click', function() {
                    const serviceName = this.querySelector('h3').textContent;
                    console.log(`CTA option clicked: ${serviceName}`);
                });
            });

            // Add form field enhancements
            const formInputs = document.querySelectorAll('input, select, textarea');
            formInputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateY(-2px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateY(0)';
                });
            });

            // Add dynamic form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (nameInput) {
                nameInput.addEventListener('blur', function() {
                    if (this.value.trim().length < 2) {
                        this.style.borderColor = '#FF6B6B';
                    } else {
                        this.style.borderColor = 'var(--accent-green)';
                    }
                });
            }

            if (emailInput) {
                emailInput.addEventListener('blur', function() {
                    if (isValidEmail(this.value.trim())) {
                        this.style.borderColor = 'var(--accent-green)';
                    } else if (this.value.trim()) {
                        this.style.borderColor = '#FF6B6B';
                    }
                });
            }

            if (messageInput) {
                messageInput.addEventListener('blur', function() {
                    if (this.value.trim().length < 10) {
                        this.style.borderColor = '#FF6B6B';
                    } else {
                        this.style.borderColor = 'var(--accent-green)';
                    }
                });
            }

            // Analytics and performance monitoring
            if (window.performance && window.performance.mark) {
                window.performance.mark('contact-section-loaded');
                
                setTimeout(() => {
                    window.performance.mark('contact-section-interactive');
                    window.performance.measure('contact-section-load-time', 'contact-section-loaded', 'contact-section-interactive');
                }, 100);
            }

            console.log('🚀 Contact & CTA section loaded - ready for CH(Ai)SE conversions!');
        });

        // Export functions for potential integration
        window.scrollToContact = function() {
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        // Service selection tracking
        window.trackServiceInterest = function(serviceType) {
            console.log(`Service interest tracked: ${serviceType}`);
            // This could be expanded to integrate with analytics
        };

        // Form completion tracking
        window.trackFormCompletion = function(formData) {
            console.log('Form completion tracked:', formData);
            // This could be expanded to integrate with conversion tracking
        };
