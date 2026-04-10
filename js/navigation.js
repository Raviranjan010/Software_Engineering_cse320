// Course Structure Data
const courseStructure = [
    {
        module: "Module 1: SDLC & Requirements",
        icon: "📋",
        topics: [
            {
                id: "intro-se",
                title: "Introduction to SE",
                file: "content/01_SDLC_and_Requirements/01_Introduction_to_SE.md"
            },
            {
                id: "sdlc-models",
                title: "SDLC Models",
                file: "content/01_SDLC_and_Requirements/02_SDLC_Models.md"
            },
            {
                id: "requirements-eng",
                title: "Requirements Engineering",
                file: "content/01_SDLC_and_Requirements/03_Requirements_Engineering.md"
            },
            {
                id: "srs-document",
                title: "SRS Document",
                file: "content/01_SDLC_and_Requirements/04_SRS_Document.md"
            }
        ]
    },
    {
        module: "Module 2: Software Design",
        icon: "🎨",
        topics: [
            {
                id: "design-principles",
                title: "Design Principles",
                file: "content/02_Software_Design/01_Design_Principles.md"
            },
            {
                id: "cohesion-coupling",
                title: "Cohesion and Coupling",
                file: "content/02_Software_Design/02_Cohesion_and_Coupling.md"
            },
            {
                id: "dfd-analysis",
                title: "DFD and Structured Analysis",
                file: "content/02_Software_Design/03_DFD_and_Structured_Analysis.md"
            },
            {
                id: "structure-charts",
                title: "Structure Charts",
                file: "content/02_Software_Design/04_Structure_Charts.md"
            }
        ]
    },
    {
        module: "Module 3: OO Development & UML",
        icon: "🔷",
        topics: [
            {
                id: "unified-process",
                title: "Unified Process",
                file: "content/03_OO_Development_and_UML/01_Unified_Process.md"
            },
            {
                id: "usecase-diagrams",
                title: "UML Use Case Diagrams",
                file: "content/03_OO_Development_and_UML/02_UML_UseCase_Diagrams.md"
            },
            {
                id: "class-diagrams",
                title: "UML Class Diagrams",
                file: "content/03_OO_Development_and_UML/03_UML_Class_Diagrams.md"
            },
            {
                id: "sequence-diagrams",
                title: "UML Sequence Diagrams",
                file: "content/03_OO_Development_and_UML/04_UML_Sequence_Diagrams.md"
            },
            {
                id: "activity-diagrams",
                title: "UML Activity Diagrams",
                file: "content/03_OO_Development_and_UML/05_UML_Activity_Diagrams.md"
            },
            {
                id: "model-validation",
                title: "Model Validation",
                file: "content/03_OO_Development_and_UML/06_Model_Validation.md"
            }
        ]
    },
    {
        module: "Module 4: Software Testing",
        icon: "🧪",
        topics: [
            {
                id: "testing-fundamentals",
                title: "Testing Fundamentals",
                file: "content/04_Software_Testing/01_Testing_Fundamentals.md"
            },
            {
                id: "black-box-testing",
                title: "Black Box Testing",
                file: "content/04_Software_Testing/02_Black_Box_Testing.md"
            }
        ]
    },
    {
        module: "Module 5: Project Management",
        icon: "📊",
        topics: []
    },
    {
        module: "Module 6: Quality & Emerging Tech",
        icon: "✨",
        topics: []
    }
];

// Flatten all topics for easy access
const allTopics = courseStructure.flatMap(m => m.topics);

// Generate Sidebar
function generateSidebar() {
    const sidebarContent = document.getElementById('sidebar-content');
    sidebarContent.innerHTML = '';
    
    courseStructure.forEach((module, moduleIndex) => {
        if (module.topics.length === 0) return;
        
        const moduleSection = document.createElement('div');
        moduleSection.className = 'module-section';
        
        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        moduleHeader.innerHTML = `${module.icon} ${module.module}`;
        
        const moduleTopics = document.createElement('div');
        moduleTopics.className = 'module-topics';
        
        moduleHeader.addEventListener('click', () => {
            moduleHeader.classList.toggle('collapsed');
            moduleTopics.classList.toggle('collapsed');
        });
        
        module.topics.forEach(topic => {
            const topicLink = document.createElement('a');
            topicLink.href = `#${topic.id}`;
            topicLink.className = 'topic-link';
            topicLink.dataset.topicId = topic.id;
            topicLink.textContent = topic.title;
            
            topicLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadTopic(topic);
                closeMobileSidebar();
            });
            
            moduleTopics.appendChild(topicLink);
        });
        
        moduleSection.appendChild(moduleHeader);
        moduleSection.appendChild(moduleTopics);
        sidebarContent.appendChild(moduleSection);
    });
}

// Load Topic
function loadTopic(topic) {
    // Update URL
    window.location.hash = topic.id;
    
    // Update active state in sidebar
    updateActiveState(topic.id);
    
    // Fetch and render markdown
    fetchMarkdown(topic.file, topic);
    
    // Update breadcrumbs
    updateBreadcrumbs(topic);
    
    // Update GitHub link
    updateGitHubLink(topic.file);
    
    // Scroll to top
    document.getElementById('main-content').scrollTop = 0;
    window.scrollTo(0, 0);
}

// Update Active State
function updateActiveState(topicId) {
    document.querySelectorAll('.topic-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.topicId === topicId) {
            link.classList.add('active');
        }
    });
}

// Update Breadcrumbs
function updateBreadcrumbs(topic) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    const module = courseStructure.find(m => m.topics.includes(topic));
    
    breadcrumbs.innerHTML = `
        <a href="#" onclick="showWelcome(); return false;">Home</a> / 
        ${module.module} / 
        <strong>${topic.title}</strong>
    `;
}

// Update GitHub Link
function updateGitHubLink(filePath) {
    const githubLink = document.getElementById('github-link');
    if (!githubLink) {
        console.warn('github-link element not found in HTML');
        return;
    }
    const githubPath = filePath.replace('content/', '');
    githubLink.href = `https://github.com/Raviranjan010/Software_Engineering_cse320/blob/main/${githubPath}`;
}

// Show Welcome Screen
function showWelcome() {
    window.location.hash = '';
    const articleContent = document.getElementById('article-content');
    const template = document.getElementById('welcome-screen-template');
    
    if (!template) {
        console.error('welcome-screen-template not found!');
        articleContent.innerHTML = '<h1>Welcome to CSE320</h1><p>Software Engineering - Complete Study Notes</p>';
        return;
    }
    
    articleContent.innerHTML = template.innerHTML;
    updateWelcomeStats();
    document.getElementById('content-header').style.display = 'none';
    document.getElementById('content-footer').style.display = 'none';
    document.getElementById('toc-sidebar').style.display = 'none';
}

// Update Welcome Stats
function updateWelcomeStats() {
    const progress = getProgress();
    
    // Update stats with null checks
    const statTopics = document.getElementById('stat-topics');
    const statCompleted = document.getElementById('stat-completed');
    const statProgress = document.getElementById('stat-progress');
    
    if (statTopics) statTopics.textContent = allTopics.length;
    if (statCompleted) statCompleted.textContent = progress.completedCount;
    if (statProgress) statProgress.textContent = progress.percentage + '%';
    
    // Show continue reading if there's history
    if (progress.lastReadTopic) {
        const lastTopic = allTopics.find(t => t.id === progress.lastReadTopic);
        if (lastTopic) {
            const continueReading = document.getElementById('continue-reading');
            const continueLink = document.getElementById('continue-link');
            
            if (continueReading && continueLink) {
                continueReading.classList.remove('hidden');
                continueLink.href = `#${lastTopic.id}`;
                continueLink.textContent = `Continue: ${lastTopic.title}`;
            }
        }
    }
}

// Navigation Buttons
function setupNavigation() {
    document.getElementById('prev-topic').addEventListener('click', () => {
        navigateTopic(-1);
    });
    
    document.getElementById('next-topic').addEventListener('click', () => {
        navigateTopic(1);
    });
}

// Navigate to Previous/Next Topic
function navigateTopic(direction) {
    const currentHash = window.location.hash.slice(1);
    const currentIndex = allTopics.findIndex(t => t.id === currentHash);
    
    if (currentIndex === -1) return;
    
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < allTopics.length) {
        loadTopic(allTopics[newIndex]);
    }
}

// Update Navigation Buttons State
function updateNavButtons(topicId) {
    const currentIndex = allTopics.findIndex(t => t.id === topicId);
    
    const prevBtn = document.getElementById('prev-topic');
    const nextBtn = document.getElementById('next-topic');
    
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= allTopics.length - 1;
}

// Search Functionality
function setupSearch() {
    const searchBox = document.getElementById('search-box');
    
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterTopics(query);
    });
}

// Filter Topics
function filterTopics(query) {
    document.querySelectorAll('.topic-link').forEach(link => {
        const topicId = link.dataset.topicId;
        const topic = allTopics.find(t => t.id === topicId);
        
        if (!query) {
            link.style.display = 'flex';
            return;
        }
        
        const matchesTitle = topic.title.toLowerCase().includes(query);
        const matchesId = topicId.toLowerCase().includes(query);
        
        link.style.display = (matchesTitle || matchesId) ? 'flex' : 'none';
    });
    
    // Show all module headers when searching
    if (query) {
        document.querySelectorAll('.module-topics').forEach(topics => {
            topics.classList.remove('collapsed');
        });
        document.querySelectorAll('.module-header').forEach(header => {
            header.classList.remove('collapsed');
        });
    }
}

// Mobile Sidebar
function setupMobileSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
}

// Keyboard Navigation
function setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Left/Right arrows for navigation
        if (e.key === 'ArrowLeft' && e.altKey) {
            navigateTopic(-1);
        } else if (e.key === 'ArrowRight' && e.altKey) {
            navigateTopic(1);
        }
    });
}

// Initialize
function initNavigation() {
    generateSidebar();
    setupNavigation();
    setupSearch();
    setupMobileSidebar();
    setupKeyboardNav();
    
    // Check for hash on load
    const hash = window.location.hash.slice(1);
    if (hash) {
        const topic = allTopics.find(t => t.id === hash);
        if (topic) {
            loadTopic(topic);
            return;
        }
    }
    
    // Show welcome screen
    showWelcome();
}
