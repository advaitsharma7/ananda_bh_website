// If page is opened via file://, show instructions and prevent form submission
if (window.location.protocol === 'file:') {
    document.addEventListener('DOMContentLoaded', () => {
        const notice = document.createElement('div');
        notice.id = 'localServerNotice';
        notice.innerHTML = '<strong>Notice:</strong> Form submissions require the site to be served via HTTP. Run a local server (for example: <code>python -m http.server 8000</code>) and open <a href="http://localhost:8000/index.html">http://localhost:8000/index.html</a> to test the form.';
        notice.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#fff3cd;color:#0f1419;padding:12px 18px;border-bottom:1px solid #ffeeba;z-index:2000;font-weight:600;text-align:center;font-size:0.95rem;';
        document.body.insertBefore(notice, document.body.firstChild);

        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Form submissions require the page to be served via HTTP. See the yellow banner at the top for quick instructions.');
            });
        }
    });
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !phone || !reason) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return;
    }
    
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading message
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
});

// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced header scroll effect with dynamic shadow
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', function() {
    const isScrolled = window.scrollY > 20;
    
    if (isScrolled) {
        header.style.boxShadow = 'var(--shadow-lg)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
});

// Intersection Observer for scroll animations
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

// Apply observer to all animated elements
const animatedElements = document.querySelectorAll(
    '.service-card, .service-item, .testimonial-card, .contact-form, .contact-info, .doctor-section'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Navbar active state on scroll
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--primary-color)';
            link.style.borderBottom = '2px solid var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
            link.style.borderBottom = 'none';
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (scrolled < 800) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Number counter animation for stats
const animateCounters = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(statNum => {
        const target = parseInt(statNum.textContent);
        const isPercentage = statNum.textContent.includes('%');
        const suffix = isPercentage ? '%' : '+';
        
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                statNum.textContent = target + suffix;
                clearInterval(timer);
            } else {
                statNum.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded with enhanced animations and interactivity');
    document.body.style.opacity = '1';
});

// Add cursor effect (optional subtle enhancement)
document.addEventListener('mousemove', (e) => {
    // Subtle tracking could be added here if needed
});

