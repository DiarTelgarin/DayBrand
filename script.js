// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close mobile menu when clicking on link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Modal functionality
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    if (type === 'return') {
        content = `
            <h2>Returns & Exchange Terms</h2>
            <p><strong>Return Period:</strong> 14 days from order receipt</p>
            <h3>Return Conditions:</h3>
            <ul style="line-height: 2; margin: 20px 0;">
                <li>✔️ Item has not been worn</li>
                <li>✔️ All tags and packaging preserved</li>
                <li>✔️ Purchase document available</li>
            </ul>
            <p><strong>Non-returnable items:</strong> socks, underwear, accessories</p>
            <p>Contact us on WhatsApp to process a return</p>
        `;
    } else if (type === 'delivery') {
        content = `
            <h2>Delivery & Payment</h2>
            <h3>Delivery Methods:</h3>
            <ul style="line-height: 2; margin: 20px 0;">
                <li>🚚 Courier delivery in Almaty - free from 30,000₸</li>
                <li>📦 Delivery across Kazakhstan - from 1,500₸</li>
                <li>🏪 Self-pickup - free</li>
            </ul>
            <h3>Payment Methods:</h3>
            <ul style="line-height: 2; margin: 20px 0;">
                <li>💳 Bank card online</li>
                <li>💵 Cash to courier</li>
                <li>🏦 Kaspi transfer</li>
            </ul>
        `;
    } else {
        content = `
            <h2>Product Details</h2>
            <p>For detailed product information and order placement, please contact us:</p>
            <div style="margin-top: 30px; text-align: center;">
                <a href="#contact" class="cta-button" onclick="closeModal()">Contact Us</a>
            </div>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Form submission
function submitForm() {
    alert('Thank you for your request! We will contact you soon.');
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .catalog-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});