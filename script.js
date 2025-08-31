document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initActiveNavigation();
    initScrollAnimations();
    initCardHoverEffects();
    initTooltips();
    initMobileMenu();
    initBackToTop();
    logPerformance();
    loadSavedTheme();
    addIconEffects();
    highlightMethodDifferences();
});

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Offset per navbar fissa
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Funzione per il cambio tema
function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    
    if (isDark) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Carica il tema salvato
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Funzione per il ritorno in cima
function initBackToTop() {
    const backToTopBtn = document.querySelector('
