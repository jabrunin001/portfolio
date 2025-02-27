// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Mobile Navigation
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileNavIcon = mobileNavToggle.querySelector('i');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNavIcon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileNavIcon.className = 'fas fa-bars';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileNavIcon.className = 'fas fa-bars';
            }
        }
    });
});

// Particle animation in hero section
const particles = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 5 + 2;
    
    // Styling
    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background-color: var(--accent);
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        pointer-events: none;
        animation: float ${Math.random() * 10 + 5}s linear infinite;
    `;
    
    particles.appendChild(particle);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form validation and submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic form validation
        const formData = new FormData(contactForm);
        let isValid = true;
        
        formData.forEach((value, key) => {
            if (!value.trim()) {
                isValid = false;
                const input = contactForm.querySelector(`[name="${key}"]`);
                input.classList.add('error');
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the form data to your backend
        try {
            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            contactForm.reset();
            alert('Message sent successfully!');
        } catch (error) {
            alert('There was an error sending your message. Please try again.');
        }
    });
}

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0) rotate(360deg); }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// -------------------- INTEGRATED CONTENT --------------------

// Data for experiences, skills, projects, and blog posts
const experiences = [
    {
        title: 'Senior Data Engineer',
        company: 'University Analytics Team',
        period: '2023 - Present',
        description: 'Led the implementation of Azure data pipelines, reducing report generation time from 3 days to 30 minutes. Improved staff productivity by 25% through automated data processing.'
    },
    {
        title: 'Data Analyst',
        company: 'Tech Solutions Inc.',
        period: '2021 - 2023',
        description: 'Developed and maintained data analytics infrastructure, creating insights for business decisions.'
    }
];

const skills = [
    {
        category: "Programming Languages",
        items: ["Python", "SQL", "R", "JavaScript", "HTML/CSS", "Go", "Java", "Scala"]
    },
    {
        category: "Data Engineering",
        items: ["Azure Pipelines", "ETL Processes", "Data Warehousing", "Apache Spark", "Databricks", "Airflow"]
    },
    {
        category: "Cloud Platforms",
        items: ["AWS", "Azure", "Google Cloud Platform", "Cloud Architecture", "Serverless Computing"]
    },
    {
        category: "DevOps & Infrastructure",
        items: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform", "Git"]
    },
    {
        category: "Analytics & Visualization",
        items: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Jupyter", "Plotly", "Seaborn"]
    },
    {
        category: "Database Technologies",
        items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "Cassandra", "Neo4j"]
    },
    {
        category: "Machine Learning & AI",
        items: ["Scikit-learn", "TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision", "Deep Learning"]
    },
    {
        category: "Business Intelligence",
        items: ["Data Strategy", "KPI Development", "Business Analytics", "Report Automation", "Statistical Analysis", "Predictive Modeling"]
    }
];

const projects = [
    {
        title: 'University Data Pipeline',
        description: 'Automated data processing system handling 20+ data sources using Azure Pipelines.',
        technologies: ['Azure', 'Python', 'SQL'],
        link: '#'
    },
    {
        title: 'Analytics Dashboard',
        description: 'Real-time analytics dashboard for monitoring key business metrics.',
        technologies: ['React', 'D3.js', 'Node.js'],
        link: '#'
    }
];

const blogPosts = [
    {
        title: 'From Chaos to Clarity: How We Transformed University Data with Azure Pipelines',
        date: 'January 31, 2025',
        excerpt: 'When I took on the challenge of modernizing our university\'s data infrastructure...',
        image: '/api/placeholder/600/400', // Using placeholder instead of remote URL
        link: 'https://medium.com/@username/from-chaos-to-clarity'
    },
    {
        title: 'Building Scalable Data Solutions',
        date: 'March 10, 2024',
        excerpt: 'A deep dive into creating scalable data architectures...',
        image: '/api/placeholder/600/400', // Using placeholder instead of remote URL
        link: '/blog/scalable-data'
    }
];

// Active section highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Populate functions
function populateTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline || !experiences) return;

    // Clear existing content
    timeline.innerHTML = '';

    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        const content = document.createElement('div');
        content.className = 'timeline-item-content';
        content.innerHTML = `
            <span class="date">${exp.period}</span>
            <h3>${exp.title}</h3>
            <p class="company">${exp.company}</p>
            <p>${exp.description}</p>
        `;
        
        item.appendChild(content);
        timeline.appendChild(item);
    });
}

function populateSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer || !skills) return;

    // Clear existing content
    skillsContainer.innerHTML = '';

    skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        skillCategory.innerHTML = `
            <h3>${category.category}</h3>
            <ul class="skill-list">
                ${category.items.map(skill => `
                    <li class="skill-item">
                        <div class="skill-name">
                            <span>${skill}</span>
                            <span>${Math.floor(Math.random() * 20) + 80}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 0%;" data-width="${Math.floor(Math.random() * 20) + 80}%"></div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
        
        skillsContainer.appendChild(skillCategory);
    });
    
    // Animate progress bars after a short delay
    setTimeout(() => {
        document.querySelectorAll('.progress').forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width;
        });
    }, 500);
}

function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid || !projects) return;

    // Clear existing content
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="/api/placeholder/600/400" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" class="btn btn-outline">View Demo</a>
                    <a href="${project.link}" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function populateBlogPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts');
    if (!blogPostsContainer || !blogPosts) return;

    // Clear existing content
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="btn btn-outline">Read More</a>
            </div>
        `;
        
        blogPostsContainer.appendChild(blogCard);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        populateTimeline();
        populateSkills();
        populateProjects();
        populateBlogPosts();
    } catch (error) {
        console.error('Error populating content:', error);
    }
});