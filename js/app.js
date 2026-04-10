// Main Application Entry Point

document.addEventListener('DOMContentLoaded', () => {
    // Add welcome screen template FIRST
    addWelcomeScreenTemplate();
    
    // Initialize all modules
    initNavigation();
    initMarkdownParser();
    initProgress();
    
    console.log('CSE320 Study Notes initialized successfully');
});

// Add Welcome Screen Template
function addWelcomeScreenTemplate() {
    // Check if template already exists
    if (document.getElementById('welcome-screen-template')) {
        console.log('Welcome screen template already exists');
        return;
    }
    
    const template = document.createElement('template');
    template.id = 'welcome-screen-template';
    template.innerHTML = `
        <div id="welcome-screen">
            <h1>Welcome to CSE320</h1>
            <p>Software Engineering - Complete Study Notes</p>
            <div id="continue-reading" class="hidden">
                <h3>Continue where you left off:</h3>
                <a id="continue-link" href="#" class="btn-primary">Resume Learning</a>
            </div>
            <div id="quick-stats">
                <div class="stat-card">
                    <div class="stat-number" id="stat-topics">0</div>
                    <div class="stat-label">Total Topics</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="stat-completed">0</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="stat-progress">0%</div>
                    <div class="stat-label">Progress</div>
                </div>
            </div>
            <div style="margin-top: 50px; padding: 30px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px;">
                <h3 style="margin-bottom: 15px;">Quick Start</h3>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    Select a topic from the sidebar to begin learning, or use the search box to find specific topics.
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; text-align: left;">
                    <div style="padding: 15px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px;">
                        <strong style="color: var(--accent-blue);">📖 Read</strong>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 5px;">Comprehensive notes with examples</p>
                    </div>
                    <div style="padding: 15px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px;">
                        <strong style="color: var(--accent-green);">✓ Track</strong>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 5px;">Monitor your learning progress</p>
                    </div>
                    <div style="padding: 15px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px;">
                        <strong style="color: var(--accent-yellow);">⌨️ Navigate</strong>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 5px;">Use Alt+Arrow keys or buttons</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(template);
    console.log('Welcome screen template created successfully');
}

// Handle hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    
    if (!hash) {
        showWelcome();
        return;
    }
    
    const topic = allTopics.find(t => t.id === hash);
    if (topic) {
        loadTopic(topic);
    } else {
        console.warn('Topic not found:', hash);
        showWelcome();
    }
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    // Can be added later for offline support
    // navigator.serviceWorker.register('/sw.js');
}
