// Define the total time for the countdown (2 minutes in seconds)
const totalTime = 2 * 60; // 2 minutes in seconds (120 seconds)
let timeElapsed = 0; // Counter to track time elapsed

// Select the timer display element
const timerDisplay = document.getElementById("timer");

// Function to start the reverse timer
function startTimer(text) {
  const countdown = setInterval(() => {
    // Calculate the minutes and seconds
    let minutes = Math.floor(timeElapsed / 60);
    let seconds = timeElapsed % 60;

    // Add leading zero if seconds is less than 10
    if (seconds < 10) seconds = "0" + seconds;

    // Update the timer display
    timerDisplay.textContent = `${minutes}:${seconds}`;

    // Check if time has reached 2 minutes (120 seconds)
    if ("end" === text) {
      clearInterval(countdown); // Stop the countdown
      timeElapsed = 0;
    }
    if (timeElapsed >= totalTime) {
      clearInterval(countdown); // Stop the countdown
      timeElapsed = 0;
      timerDisplay.textContent = "00:00";
      onTimerFinish();
      // Trigger custom function when timer finishes
    }

    // Increase timeElapsed by 1 second
    timeElapsed++;
  }, 1000);
}

// Custom function that triggers when the timer finishes
function onTimerFinish() {
  autonext();
}

// Start the timer when the page loads
// startReverseTimer();
