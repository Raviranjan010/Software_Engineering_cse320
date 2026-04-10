// Progress Tracking using localStorage

const PROGRESS_KEY = 'cse320-progress';

// Get Progress Data
function getProgress() {
    const data = localStorage.getItem(PROGRESS_KEY);
    
    if (!data) {
        return {
            topics: {},
            lastReadTopic: null,
            completedCount: 0,
            percentage: 0
        };
    }
    
    const progress = JSON.parse(data);
    progress.completedCount = Object.values(progress.topics).filter(t => t.completed).length;
    progress.percentage = Math.round((progress.completedCount / allTopics.length) * 100);
    
    return progress;
}

// Save Progress
function saveProgress(progress) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

// Mark Topic as Read
function markTopicAsRead(topicId) {
    const progress = getProgress();
    
    if (!progress.topics[topicId]) {
        progress.topics[topicId] = {
            read: false,
            completed: false,
            lastReadAt: null,
            completedAt: null
        };
    }
    
    progress.topics[topicId].read = true;
    progress.topics[topicId].lastReadAt = new Date().toISOString();
    progress.lastReadTopic = topicId;
    
    saveProgress(progress);
    updateProgressBar();
}

// Mark Topic as Complete
function markTopicAsComplete(topicId) {
    const progress = getProgress();
    
    if (!progress.topics[topicId]) {
        progress.topics[topicId] = {
            read: false,
            completed: false,
            lastReadAt: null,
            completedAt: null
        };
    }
    
    progress.topics[topicId].completed = true;
    progress.topics[topicId].completedAt = new Date().toISOString();
    
    saveProgress(progress);
    updateProgressBar();
    updateSidebarProgress();
    
    // Update button text
    const btn = document.getElementById('mark-complete');
    btn.textContent = '✓ Completed';
    btn.disabled = true;
}

// Toggle Complete Status
function toggleComplete(topicId) {
    const progress = getProgress();
    
    if (progress.topics[topicId] && progress.topics[topicId].completed) {
        // Unmark
        progress.topics[topicId].completed = false;
        progress.topics[topicId].completedAt = null;
    } else {
        // Mark complete
        markTopicAsComplete(topicId);
        return;
    }
    
    saveProgress(progress);
    updateProgressBar();
    updateSidebarProgress();
    
    const btn = document.getElementById('mark-complete');
    btn.textContent = 'Mark Complete';
    btn.disabled = false;
}

// Update Progress Bar
function updateProgressBar() {
    const progress = getProgress();
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    progressFill.style.width = progress.percentage + '%';
    progressText.textContent = progress.percentage + '% Complete';
}

// Update Sidebar Progress Indicators
function updateSidebarProgress() {
    const progress = getProgress();
    
    document.querySelectorAll('.topic-link').forEach(link => {
        const topicId = link.dataset.topicId;
        
        if (progress.topics[topicId] && progress.topics[topicId].completed) {
            link.classList.add('completed');
        } else {
            link.classList.remove('completed');
        }
    });
}

// Update Mark Complete Button
function updateCompleteButton(topicId) {
    const progress = getProgress();
    const btn = document.getElementById('mark-complete');
    
    if (progress.topics[topicId] && progress.topics[topicId].completed) {
        btn.textContent = '✓ Completed';
        btn.disabled = true;
    } else {
        btn.textContent = 'Mark Complete';
        btn.disabled = false;
    }
}

// Setup Complete Button
function setupCompleteButton() {
    const btn = document.getElementById('mark-complete');
    
    btn.addEventListener('click', () => {
        const currentHash = window.location.hash.slice(1);
        if (currentHash) {
            toggleComplete(currentHash);
        }
    });
}

// Auto-mark as complete when user scrolls to bottom
function setupAutoComplete() {
    let autoCompleteTimeout;
    
    window.addEventListener('scroll', () => {
        const currentHash = window.location.hash.slice(1);
        if (!currentHash) return;
        
        const progress = getProgress();
        if (progress.topics[currentHash] && progress.topics[currentHash].completed) return;
        
        clearTimeout(autoCompleteTimeout);
        
        // Check if user has scrolled to bottom (within 200px)
        const scrollPosition = window.pageYOffset + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - 200) {
            autoCompleteTimeout = setTimeout(() => {
                markTopicAsComplete(currentHash);
                updateCompleteButton(currentHash);
            }, 3000); // Wait 3 seconds at bottom before marking complete
        }
    });
}

// Get Last Read Topic
function getLastReadTopic() {
    const progress = getProgress();
    return progress.lastReadTopic;
}

// Reset Progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem(PROGRESS_KEY);
        updateProgressBar();
        updateSidebarProgress();
        showWelcome();
    }
}

// Export Progress (for backup)
function exportProgress() {
    const progress = getProgress();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'cse320-progress-backup.json';
    link.click();
}

// Import Progress (from backup)
function importProgress(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const progress = JSON.parse(e.target.result);
            saveProgress(progress);
            updateProgressBar();
            updateSidebarProgress();
            alert('Progress imported successfully!');
            location.reload();
        } catch (error) {
            alert('Error importing progress. Invalid file format.');
        }
    };
    
    reader.readAsText(file);
}

// Initialize Progress Tracking
function initProgress() {
    updateProgressBar();
    updateSidebarProgress();
    setupCompleteButton();
    setupAutoComplete();
}
