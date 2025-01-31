// Data structures
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
        items: ["Python", "SQL", "R", "JavaScript", "HTML/CSS","Go"]
    },
    {
        category: "Data Engineering",
        items: ["Azure Pipelines", "ETL", "Data Warehousing", "Apache Spark", "Databricks"]
    },
    {
        category: "Cloud & Infrastructure",
        items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    {
        category: "Analytics & Visualization",
        items: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Jupyter"]
    },
    {
        category: "Database Technologies",
        items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
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
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        link: 'https://medium.com/@username/from-chaos-to-clarity'
    },
    {
        title: 'Building Scalable Data Solutions',
        date: 'March 10, 2024',
        excerpt: 'A deep dive into creating scalable data architectures...',
        image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/scalable-data'
    }
];

// Theme toggling
const themeToggle = document.querySelector('.theme-toggle');
themeToggle?.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
});

// Populate functions with error handling
function populateTimeline() {
    const timeline = document.querySelector('.timeline-container');
    if (!timeline || !experiences) return;

    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(item);
    });
}

function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid || !skills) return;

    skills.forEach(category => {
        const div = document.createElement('div');
        div.className = 'skill-category';
        div.innerHTML = `
            <div class="skill-header" onclick="toggleSkillList(this)">
                <h3>${category.category}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <ul class="skill-list collapsed">
                ${category.items.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        skillsGrid.appendChild(div);
    });
}

function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid || !projects) return;

    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn secondary">View Project</a>
        `;
        projectGrid.appendChild(div);
    });
}

function populateBlog() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid || !blogPosts) return;

    blogPosts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-card';
        div.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p class="date">${post.date}</p>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="btn secondary">Read More</a>
            </div>
        `;
        blogGrid.appendChild(div);
    });
}

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    try {
        populateTimeline();
        populateSkills();
        populateProjects();
        populateBlog();
    } catch (error) {
        console.error('Error initializing sections:', error);
    }
});

// Skill list toggle function
function toggleSkillList(header) {
    const skillList = header.nextElementSibling;
    skillList.classList.toggle('collapsed');
    header.querySelector('i').classList.toggle('fa-chevron-up');
    header.querySelector('i').classList.toggle('fa-chevron-down');
} 