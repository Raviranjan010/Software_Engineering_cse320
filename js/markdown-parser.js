// Markdown Parser Configuration
marked.use({
    renderer: new marked.Renderer(),
    breaks: true,
    gfm: true
});

// Custom Renderer
const renderer = new marked.Renderer();

// Override heading to add anchor links
renderer.heading = function(text, level, raw) {
    let headingText = text;
    let headingLevel = level;
    let headingRaw = raw;

    // Support for marked v12+ token objects
    if (typeof text === 'object' && text !== null) {
        headingText = text.text;
        headingLevel = text.depth;
        headingRaw = text.raw;
    }

    const id = (headingRaw || headingText || '').toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${headingLevel} id="${id}"><a href="#${id}" class="heading-anchor">${headingText}</a></h${headingLevel}>`;
};

// Override code blocks to add wrapper and copy button
renderer.code = function(code, language) {
    let blockCode = code;
    let blockLang = language;
    
    // Support for marked v12+ token objects
    if (typeof code === 'object' && code !== null) {
        blockCode = code.text;
        blockLang = code.lang;
    }
    
    // Safety check in case highlight fails
    let highlighted = blockCode;
    try {
        highlighted = hljs.highlightAuto(blockCode, blockLang ? [blockLang] : undefined).value;
    } catch (e) {
        console.warn('Highlighting failed', e);
    }
    
    return `
        <div class="code-block-wrapper">
            <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
            <pre><code class="hljs ${blockLang || ''}">${highlighted}</code></pre>
        </div>
    `;
};

// Parse Markdown
function parseMarkdown(markdown) {
    // Process special markers before parsing
    markdown = processSpecialMarkers(markdown);
    
    // Parse with marked
    let html = marked.parse(markdown, { renderer: renderer });
    
    return html;
}

// Process Special Markers (DEF, TIP, EXAM)
function processSpecialMarkers(markdown) {
    // Process **DEF** markers
    markdown = markdown.replace(/\*\*DEF\*\*\s*(.*?)(?=\n\n|\n#|$)/gs, function(match, content) {
        return `<div class="definition"><strong>Definition</strong>${content.trim()}</div>`;
    });
    
    // Process **★ EXAM** markers
    markdown = markdown.replace(/\*\*★\s*EXAM\*\*\s*(.*?)(?=\n\n|\n#|$)/gs, function(match, content) {
        return `<div class="exam-tip"><strong>★ Exam Important</strong>${content.trim()}</div>`;
    });
    
    // Process **TIP** markers
    markdown = markdown.replace(/\*\*TIP\*\*\s*(.*?)(?=\n\n|\n#|$)/gs, function(match, content) {
        return `<div class="tip-box"><strong>Tip</strong>${content.trim()}</div>`;
    });

    // Process MCQs into interactive widgets
    markdown = processInteractiveQuizzes(markdown);
    
    return markdown;
}

// Extract MCQs and turn into interactive HTML components
function processInteractiveQuizzes(markdown) {
    // Match common MCQ pattern: **Q1. Question text** \n options \n **Answer: X** \n *Explanation: Y*
    const mcqRegex = /\*\*Q(\d+)\.\s*(.*?)\*\*(.*?)\*\*Answer:\s*(.*?)\*\*(?:\s*\*Explanation:\s*(.*?)\*)?/gis;
    
    markdown = markdown.replace(mcqRegex, (match, qNum, qText, optionsRaw, answerText, explanation) => {
        // Parse options
        let optionsHtml = '';
        const optionsList = optionsRaw.trim().split('\n');
        
        // Extract the correct letter e.g., 'b' from 'b) Non-functional requirement'
        let correctLetter = answerText.trim().toLowerCase().charAt(0);
        
        optionsList.forEach((opt) => {
            if (!opt.trim()) return;
            const isCorrect = opt.trim().toLowerCase().startsWith(correctLetter);
            optionsHtml += `
                <div class="mcq-option" onclick="checkMCQAnswer(this, ${isCorrect})">
                    <span class="mcq-option-text">${opt.trim()}</span>
                </div>
            `;
        });
        
        const explanationHtml = explanation ? `<div class="mcq-explanation hidden"><em>Explanation:</em> ${explanation.trim()}</div>` : '';
        
        return `<div class="quiz-card">
<div class="quiz-question"><strong>Q${qNum}.</strong> ${qText.trim()}</div>
<div class="quiz-options">
${optionsHtml}
</div>
<div class="quiz-feedback hidden"></div>
${explanationHtml}
</div>`;
    });
    
    return markdown;
}

// Fetch and Render Markdown
function fetchMarkdown(filePath, topic) {
    const articleContent = document.getElementById('article-content');
    
    // Show loading state
    articleContent.innerHTML = '<div class="loading-container"><div class="spinner"></div><p>Loading content...</p></div>';
    
    // Add cache-busting parameter to prevent stale content
    const cacheBuster = `?t=${Date.now()}`;
    const fetchPath = filePath + cacheBuster;
    
    console.log('Fetching:', fetchPath);
    
    fetch(fetchPath)
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Content-Type:', response.headers.get('content-type'));
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(markdown => {
            console.log('Markdown loaded, length:', markdown.length);
            const html = parseMarkdown(markdown);
            articleContent.innerHTML = html;
            
            // Post-processing
            highlightCodeBlocks();
            renderMermaidDiagrams();
            generateTOC();
            updateNavButtons(topic.id);
            markTopicAsRead(topic.id);
            estimateReadingTime(markdown);
            updateCompleteButton(topic.id);
            
            // Show header and footer
            document.getElementById('content-header').style.display = 'flex';
            document.getElementById('content-footer').style.display = 'flex';
            document.getElementById('toc-sidebar').style.display = 'block';
        })
        .catch(error => {
            console.error('Error loading content:', error);
            console.error('File path:', filePath);
            
            articleContent.innerHTML = `
                <div class="error-container">
                    <h2>⚠️ Content Not Available</h2>
                    <p class="error-message">This topic is currently being prepared.</p>
                    <div class="error-details">
                        <p><strong>Debug Info:</strong></p>
                        <p>File: <code>${filePath}</code></p>
                        <p>Error: ${error.message}</p>
                    </div>
                    <div class="error-actions">
                        <a href="https://github.com/Raviranjan010/Software_Engineering_cse320/blob/main/${filePath}" target="_blank" class="btn-primary">
                            📄 View on GitHub
                        </a>
                        <button onclick="location.reload()" class="btn-secondary">
                            🔄 Retry
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('content-header').style.display = 'flex';
            document.getElementById('content-footer').style.display = 'flex';
            document.getElementById('toc-sidebar').style.display = 'block';
        });
}

// Highlight Code Blocks
function highlightCodeBlocks() {
    if (typeof hljs === 'undefined') {
        console.warn('Highlight.js is not loaded yet');
        return;
    }
    document.querySelectorAll('pre code').forEach((block) => {
        try {
            hljs.highlightElement(block);
        } catch (e) {
            console.warn('Highlighting block failed:', e);
        }
    });
}

// Copy Code Function
function copyCode(button) {
    const codeBlock = button.nextElementSibling.querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Render Mermaid Diagrams
function renderMermaidDiagrams() {
    // Find mermaid code blocks
    document.querySelectorAll('pre code.language-mermaid').forEach(codeBlock => {
        const mermaidDiv = document.createElement('div');
        mermaidDiv.className = 'mermaid';
        mermaidDiv.textContent = codeBlock.textContent;
        
        codeBlock.parentElement.replaceWith(mermaidDiv);
    });
    
    // Render all mermaid diagrams
    if (document.querySelectorAll('.mermaid').length > 0) {
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose'
        });
    }
}

// Generate Table of Contents
function generateTOC() {
    const tocContent = document.getElementById('toc-content');
    const headings = document.querySelectorAll('#article-content h2, #article-content h3');
    
    if (headings.length === 0) {
        tocContent.innerHTML = '<p style="color: var(--text-muted); font-size: 13px;">No sections available</p>';
        return;
    }
    
    tocContent.innerHTML = '';
    
    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.style.paddingLeft = heading.tagName === 'H3' ? '24px' : '12px';
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        tocContent.appendChild(link);
    });
    
    // Track active TOC item on scroll
    trackTOCOnScroll();
}

// Track TOC on Scroll
function trackTOCOnScroll() {
    const headings = document.querySelectorAll('#article-content h2, #article-content h3');
    const tocLinks = document.querySelectorAll('#toc-content a');
    
    window.addEventListener('scroll', () => {
        let currentHeading = '';
        
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                currentHeading = heading.id;
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentHeading}`) {
                link.classList.add('active');
            }
        });
    });
}

// Estimate Reading Time
function estimateReadingTime(markdown) {
    const wordCount = markdown.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/min
    
    const readingTimeElement = document.getElementById('reading-time');
    if (readingTime <= 1) {
        readingTimeElement.textContent = '< 1 min read';
    } else {
        readingTimeElement.textContent = `${readingTime} min read`;
    }
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Global MCQ checking logic
window.checkMCQAnswer = function(element, isCorrect) {
    const parentCard = element.closest('.quiz-card');
    const feedbackEl = parentCard.querySelector('.quiz-feedback');
    const explanationEl = parentCard.querySelector('.mcq-explanation');
    
    // Disable all options
    parentCard.querySelectorAll('.mcq-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.classList.remove('selected', 'correct', 'wrong');
        
        // Highlight the correct answer anyway
        if (opt.getAttribute('onclick') && opt.getAttribute('onclick').includes('true')) {
            opt.classList.add('correct-answer-highlight');
        }
    });
    
    element.classList.add('selected');
    
    feedbackEl.classList.remove('hidden');
    if (isCorrect) {
        element.classList.add('correct');
        feedbackEl.innerHTML = '<span class="status-icon">✅</span> Correct!';
        feedbackEl.className = 'quiz-feedback correct-msg';
    } else {
        element.classList.add('wrong');
        feedbackEl.innerHTML = '<span class="status-icon">❌</span> Incorrect.';
        feedbackEl.className = 'quiz-feedback wrong-msg';
    }
    
    if (explanationEl) {
        explanationEl.classList.remove('hidden');
    }
}

// Initialize Markdown Parser
function initMarkdownParser() {
    setupBackToTop();
    window.copyCode = copyCode;
}
