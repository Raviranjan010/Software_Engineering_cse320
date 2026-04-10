// Markdown Parser Configuration
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
});

// Custom Renderer
const renderer = new marked.Renderer();

// Override heading to add anchor links
renderer.heading = function(text, level, raw) {
    const id = raw.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${id}"><a href="#${id}" class="heading-anchor">${text}</a></h${level}>`;
};

// Override code blocks to add wrapper and copy button
renderer.code = function(code, language) {
    const highlighted = hljs.highlightAuto(code, language ? [language] : undefined).value;
    return `
        <div class="code-block-wrapper">
            <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
            <pre><code class="hljs ${language || ''}">${highlighted}</code></pre>
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
    
    return markdown;
}

// Fetch and Render Markdown
function fetchMarkdown(filePath, topic) {
    const articleContent = document.getElementById('article-content');
    
    // Show loading state
    articleContent.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Loading...</p>';
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(markdown => {
            const html = parseMarkdown(markdown);
            articleContent.innerHTML = html;
            
            // Post-processing
            highlightCodeBlocks();
            renderMermaidDiagrams();
            generateTOC();
            updateNavButtons(topic.id);
            markTopicAsRead(topic.id);
            estimateReadingTime(markdown);
            
            // Show header and footer
            document.getElementById('content-header').style.display = 'flex';
            document.getElementById('content-footer').style.display = 'flex';
            document.getElementById('toc-sidebar').style.display = 'block';
        })
        .catch(error => {
            articleContent.innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <h2>Content Not Available</h2>
                    <p style="color: var(--text-secondary);">This topic is currently being prepared.</p>
                    <p style="color: var(--text-secondary); font-size: 14px; margin-top: 20px;">
                        <a href="https://github.com/Raviranjan010/Software_Engineering_cse320" target="_blank">
                            Check GitHub Repository
                        </a>
                    </p>
                </div>
            `;
            document.getElementById('content-header').style.display = 'flex';
            document.getElementById('content-footer').style.display = 'flex';
            document.getElementById('toc-sidebar').style.display = 'block';
        });
}

// Highlight Code Blocks
function highlightCodeBlocks() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
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

// Initialize Markdown Parser
function initMarkdownParser() {
    setupBackToTop();
    
    // Make copyCode function globally accessible
    window.copyCode = copyCode;
}
