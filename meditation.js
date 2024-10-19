// Show popup function
function showPopup(title, imageUrl) {
    document.getElementById('popupModal').style.display = 'flex';
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupImage').src = imageUrl;

    // Reset the music player state
    resetMusicPlayer();
}

// Close popup function
function closePopup() {
    document.getElementById('popupModal').style.display = 'none';

    // Stop the music player when closing the popup
    stopProgress();
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('popupModal');
    if (event.target == modal) {
        closePopup();
    }
};

// Music player functionality
let isPlaying = false;
let currentDuration = 0;
const totalDuration = 300; // Example total duration in seconds (5 minutes)
let progressInterval;

// Toggle play/pause
function togglePlayPause() {
    const playIcon = document.querySelector('.play-icon');
    isPlaying = !isPlaying;
    playIcon.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;'; // Pause icon or play icon

    if (isPlaying) {
        startProgress();
    } else {
        stopProgress();
    }
}

// Update progress bar and time
function startProgress() {
    progressInterval = setInterval(() => {
        if (currentDuration < totalDuration) {
            currentDuration++;
            updateProgress();
        } else {
            stopProgress();
        }
    }, 1000);
}

function stopProgress() {
    clearInterval(progressInterval);
    isPlaying = false;
    const playIcon = document.querySelector('.play-icon');
    playIcon.innerHTML = '&#9654;'; // Reset to play icon
}

// Update progress bar width and time display
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const currentTime = document.getElementById('currentTime');

    const progressPercentage = (currentDuration / totalDuration) * 100;
    progressFill.style.width = progressPercentage + '%';

    // Update time display
    const minutes = Math.floor(currentDuration / 60);
    const seconds = currentDuration % 60;
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Reset the music player state
function resetMusicPlayer() {
    currentDuration = 0;
    updateProgress();
    stopProgress();
}

// Array of day content for the featured session
const dayContent = [
    {
        title: "Day 1: Breathing Exercise",
        text: "Day 1 starts with a simple 5-minute breathing exercise designed to help you become aware of your breath and begin to reduce stress.",
        imageUrl: "img/top.jpeg"
    },
    {
        title: "Day 2: Extended Breath Awareness",
        text: "Day 2 introduces an extended 10-minute breathing session to deepen your practice.",
        imageUrl: "img/top.jpeg"
    },
    {
        title: "Day 3: Mindful Breathing",
        text: "Day 3 incorporates mindfulness techniques into your breathing exercises.",
        imageUrl: "img/top.jpeg"
    }
    // Add more days as needed
];

let currentDayIndex = 0;

// Show featured popup function
function showFeaturedPopup() {
    document.getElementById('featuredPopupModal').style.display = 'flex';
    updateFeaturedPopupContent(currentDayIndex);
}

// Close featured popup function
function closeFeaturedPopup() {
    document.getElementById('featuredPopupModal').style.display = 'none';
}

// Update content in the popup based on the current day index
function updateFeaturedPopupContent(dayIndex) {
    const content = dayContent[dayIndex];
    document.getElementById('featuredPopupTitle').textContent = content.title;
    document.getElementById('featuredPopupText').textContent = content.text;
    document.getElementById('featuredPopupImage').src = content.imageUrl;
    document.getElementById('currentDay').textContent = `Day ${dayIndex + 1}`;
}

// Change day content in the popup
function changeDay(direction) {
    const newIndex = currentDayIndex + direction;
    if (newIndex >= 0 && newIndex < dayContent.length) {
        currentDayIndex = newIndex;
        updateFeaturedPopupContent(currentDayIndex);
    }
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('featuredPopupModal');
    if (event.target == modal) {
        closeFeaturedPopup();
    }
};
