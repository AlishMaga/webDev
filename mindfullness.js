// Timer variables
let timerInterval;
let timeRemaining = 300; // 5 minutes in seconds

// Function to open the popup
function openPopupBreathing() {
    document.getElementById('popupModalBreathing').style.display = 'block';
    clearInterval(timerInterval); // Clear any existing timer
    timeRemaining = 300; // Reset to 5 minutes
    document.getElementById('timeRemaining').innerText = formatTime(timeRemaining);
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    clearInterval(timerInterval); // Stop the timer if popup is closed
}

// Function to start the timer
function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById('timeRemaining').innerText = formatTime(timeRemaining);
        } else {
            clearInterval(timerInterval);
            alert("Time is up!");
        }
    }, 1000); // Update every second
}

// Function to format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to open YouTube link
function openYouTubeLink() {
    window.open('https://www.youtube.com/watch?v=inPkOzo_8XQ&t=4s', '_blank');
}

// Add event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelectorAll('.start-btn');
    startButton.forEach(button => {
        button.addEventListener('click', openPopupBreathing);
    });

    // Close the popup when clicking on the close button
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            closePopup('popupModalBreathing');
        });
    });
});
