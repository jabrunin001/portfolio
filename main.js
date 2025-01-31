// Data for dynamic content
const experiences = [
    {
        title: 'Senior Research Data Analyst',
        company: 'Northwestern University',
        period: '2019 - Present',
        description: 'Senior Research Data Analyst at Northwestern University leading enterprise-wide analytics initiatives for the Office of Research. Transformed operational efficiency by developing comprehensive executive dashboards that track over $4B in proposals and $1B in awards. Engineered a unified data platform integrating 12 distinct sources for employee metrics and resource allocation, maintaining 98% confidence interval accuracy. Implemented institution-wide row-level security system spanning 37 units, enabling secure, granular data access while fostering cross-departmental collaboration. Expertise in Tableau, SQL, and advanced data integration tools drives data-informed decision-making across the university\'s research operations.'
    },
    // Add more experiences
];

const skills = [
    {
        category: 'Technical Skills',
        items: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'Data Visualization', 'Data Integration', 'Data Security', 'Data Governance', 'Data Warehousing', 'Data Modeling', 'Data Architecture', 'Data Quality', 'Data Reporting', 'Data Analytics', 'Data Science', 'Data Engineering', 'Data Analytics Tools', 'Data Visualization Tools', 'Data Integration Tools', 'Data Security Tools', 'Data Warehousing Tools', 'Data Modeling Tools', 'Data Architecture Tools', 'Data Quality Tools', 'Data Reporting Tools', 'Data Analytics Tools', 'Data Science Tools', 'Data Engineering Tools']
    },
    // Add more skill categories
];

const projects = [
    {
        title: 'Project Name',
        description: 'Project description...',
        technologies: ['Tech 1', 'Tech 2'],
        link: '#'
    },
    // Add more projects
];

const blogPosts = [
    {
        title: 'From Chaos to Clarity: How We Transformed University Data with Azure Pipelines',
        date: 'January 31, 2025',
        excerpt: 'When I took on the challenge of modernizing our university\'s data infrastructure, we faced a maze of 20 different data sources and three departments struggling to track their metrics effectively. Through careful implementation of Azure Pipelines and a comprehensive data warehouse solution, we transformed this fragmented landscape into a unified, real-time analytics powerhouse. Our journey not only reduced report generation time from 3 days to 30 minutes but also improved staff productivity by 25%. This is the story of how we turned data chaos into clarity, and the valuable lessons we learned along the way.',
        image: 'assets/blog-1.jpg',
        link: 'https://medium.com/@zcfmvsm/from-chaos-to-clarity-how-we-transformed-university-data-with-azure-pipelines-6c7a9c27736c'
    },
    {
        title: 'Blog Post Title 2',
        date: 'March 10, 2024',
        excerpt: 'Another interesting blog post excerpt that captures the reader\'s attention and encourages them to read more...',
        image: 'assets/blog-2.jpg',
        link: '/blog/post-2'
    },
    // Add more blog posts as needed
];

// Theme toggling
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
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

// Populate dynamic content
function populateTimeline() {
    const timeline = document.querySelector('.timeline-container');
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
    skills.forEach(category => {
        const div = document.createElement('div');
        div.className = 'skill-category';
        div.innerHTML = `
            <h3>${category.category}</h3>
            <ul>
                ${category.items.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        skillsGrid.appendChild(div);
    });
}

function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
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
    blogPosts.slice(0, 3).forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-card';
        div.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <p class="blog-date">${post.date}</p>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="btn secondary">Read More</a>
            </div>
        `;
        blogGrid.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateTimeline();
    populateSkills();
    populateProjects();
    populateBlog();
    document.getElementById('year').textContent = new Date().getFullYear();
}); 