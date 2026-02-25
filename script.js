const translations = {
    es: {
        nav: {
            home: "Inicio",
            education: "Educación",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Analista Programador & Desarrollador Web",
            seniority: "+ 2 años",
            seniorityText: "de experiencia",
            description: "Transformando ideas en soluciones tecnológicas. Especializado en desarrollo web y análisis de sistemas.",
            projects: "Ver Proyectos",
            downloadCV: "Descarga mi CV"
        },
        education: {
            title: "Educación",
            degree: "Tecnicatura Superior de Análisis de Sistemas de Computación",
            period: "2024 - 2026",
            status: "En curso"
        },
        skills: {
            title: "Habilidades",
            analysis: "Análisis & Diseño",
            tools: "Herramientas"
        },
        projects: {
            title: "Proyectos",
            weatherSpot: "Plataforma en línea especializada en ofrecer pronósticos meteorológicos generales de todos los lugares del mundo. Esto se logra con una implementación de Open-Meteo API.",
            dbpes6: "Página web dedicada para la comunidad del videojuego PES 6. Cuenta con un sistema de usuarios y una base de datos con información sobre jugadores y equipos del juego, quienes los usuarios pueden crearlos.",
            brushUp: "Aplicación móvil de productividad que combina técnicas de gestión del tiempo con un diseño atractivo. Permite a los usuarios organizar tareas, establecer recordatorios y monitorear su progreso diario.",
            chatUs: "Prototipo de IA conversacional desarrollado con Flask. Permite a los usuarios interactuar con un chatbot que responde preguntas y ofrece información en tiempo real, demostrando capacidades de procesamiento de lenguaje natural.",
            coming: "Próximamente",
            comingDesc: "Proyecto en desarrollo. ¡Muy pronto disponible!",
            dev: "En desarrollo",
            code: "Código",
            demo: "Demo"
        },
        contact: {
            title: "Contacto",
            connect: "¡Conectemos!",
            text: "¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en escribirme.",
            name: "Nombre",
            email: "Email",
            message: "Mensaje",
            send: "Enviar Mensaje"
        },
        footer: {
            rights: "Todos los derechos reservados."
        },
        code: {
            experience: "+2 años"
        }
    },
    en: {
        nav: {
            home: "Home",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Programmer Analyst & Web Developer",
            seniority: "+ 2 years",
            seniorityText: "of experience",
            description: "Turning ideas into technological solutions. Specialized in web development and systems analysis.",
            projects: "View Projects",
            downloadCV: "Download CV"
        },
        education: {
            title: "Education",
            degree: "Higher Technician in Computer Systems Analysis",
            period: "2024 - 2026",
            status: "In progress"
        },
        skills: {
            title: "Skills",
            analysis: "Analysis & Design",
            tools: "Tools"
        },
        projects: {
            title: "Projects",
            weatherSpot: "Online platform specialized in providing general weather forecasts for all locations worldwide. This is achieved using Open-Meteo API integration.",
            dbpes6: "Website dedicated to the PES 6 video game community. It features a user system and a database with information about players and teams, which users can create.",
            brushUp: "Mobile productivity application that combines time management techniques with an attractive design. Allows users to organize tasks, set reminders, and monitor their daily progress.",
            chatUs: "Conversational AI prototype developed with Flask. Enables users to interact with a chatbot that answers questions and provides real-time information, demonstrating natural language processing capabilities.",
            coming: "Coming Soon",
            comingDesc: "Project in development. Coming very soon!",
            dev: "In development",
            code: "Code",
            demo: "Demo"
        },
        contact: {
            title: "Contact",
            connect: "Let's Connect!",
            text: "Do you have any questions or want to work together? Feel free to reach out.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message"
        },
        footer: {
            rights: "All rights reserved."
        },
        code: {
            experience: "+2 yrs"
        }
    }
};

let currentLang = 'es';

// ========================================
// THEME TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ========================================
// LANGUAGE TOGGLE
// ========================================
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langText.textContent = currentLang.toUpperCase();
    updateContent();
    updateSkillYears();
    updateCodeBlock();
    localStorage.setItem('language', currentLang);
});

// Check for saved language preference
const savedLang = localStorage.getItem('language');
if (savedLang) {
    currentLang = savedLang;
    langText.textContent = currentLang.toUpperCase();
    updateContent();
    updateSkillYears();
    updateCodeBlock();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = translations[currentLang];
        
        for (const key of keys) {
            value = value ? value[key] : null;
        }
        
        if (value) {
            el.textContent = value;
        }
    });
}

function updateSkillYears() {
    const skillYears = document.querySelectorAll('.skill-years');
    const yearText = currentLang === 'es' ? 'año' : 'yr';
    const pluralText = currentLang === 'es' ? 'años' : 'yrs';
    
    skillYears.forEach(span => {
        const text = span.textContent;
        const num = parseInt(text.replace(/\D/g, ''));
        if (num === 1) {
            span.textContent = `+1 ${yearText}`;
        } else {
            span.textContent = `+${num} ${pluralText}`;
        }
    });
}

function updateCodeBlock() {
    const codeExperience = document.getElementById('codeExperience');
    if (codeExperience) {
        codeExperience.textContent = translations[currentLang].code.experience;
    }
}

// ========================================
// MENU TOGGLE (Mobile)
// ========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL
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
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles to elements
document.querySelectorAll('.skill-card, .project-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)';
    } else {
        navbar.style.boxShadow = '8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate
    if (!name || !email || !message) {
        showNotification(currentLang === 'es' ? 'Por favor completa todos los campos' : 'Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification(currentLang === 'es' ? 'Por favor ingresa un email válido' : 'Please enter a valid email', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification(currentLang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 12px;
        background: ${type === 'success' ? '#27c93f' : '#ff5f56'};
        color: white;
        font-weight: 500;
        box-shadow: 4px 4px 8px var(--shadow-dark);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add keyframe animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========================================
// ACTIVE LINK HIGHLIGHT
// ========================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href') === `#${current}`) {
            item.style.color = 'var(--primary-blue)';
        }
    });
});

// ========================================
// PROFILE PHOTO HANDLING
// ========================================
const profilePhoto = document.getElementById('profilePhoto');

profilePhoto.addEventListener('error', function() {
    this.style.display = 'none';
});

// ========================================
// DOWNLOAD CV BUTTON
// ========================================
const downloadCV = document.getElementById('downloadCV');
downloadCV.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Determine which CV to download based on current language
    const cvFileName = currentLang === 'es' ? 'CV - Julian Murno - ES.pdf' : 'CV - Julian Murno - EN.pdf';
    
    // Check if file exists and download
    const link = document.createElement('a');
    link.href = cvFileName;
    link.download = '';
    
    // Try to download, show error if not found
    fetch(cvFileName)
        .then(response => {
            if (response.ok) {
                link.click();
            } else {
                showNotification(
                    currentLang === 'es' 
                        ? 'No se encontró el archivo ' + cvFileName 
                        : 'File not found: ' + cvFileName, 
                    'error'
                );
            }
        })
        .catch(() => {
            showNotification(
                currentLang === 'es' 
                    ? 'No se encontró el archivo ' + cvFileName 
                    : 'File not found: ' + cvFileName, 
                'error'
            );
        });
});

// Initialize
updateSkillYears();
updateCodeBlock();

console.log('Portfolio de Julián Murno cargado correctamente');
console.log('Theme:', localStorage.getItem('theme') || 'light');
console.log('Language:', currentLang);
