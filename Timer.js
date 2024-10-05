let countdown; // Declare the countdown variable globally
let timeElapsed = 0; // Counter to track time elapsed

// Define the total time for the countdown (4 minutes in seconds)
const totalTime = 4 * 60; // 4 minutes in seconds (240 seconds)

// Select the timer display element
const timerDisplay = document.getElementById("timer");

// Function to start the reverse timer
function startTimer(text) {
  // Clear any existing timer before starting a new one
  clearInterval(countdown);

  countdown = setInterval(() => {
    // Calculate the minutes and seconds
    let minutes = Math.floor(timeElapsed / 60);
    let seconds = timeElapsed % 60;

    // Add leading zero if seconds is less than 10
    if (seconds < 10) seconds = "0" + seconds;

    // Update the timer display using template literals
    timerDisplay.textContent = `${minutes}:${seconds}`;

    // Check if the timer should be stopped based on the 'text' parameter
    if ("end" === text) {
      stopTimer(); // Stop the countdown
      timerDisplay.textContent = "00:00";
    }

    // Check if the total time has been reached
    if (timeElapsed >= totalTime) {
      stopTimer(); // Stop the countdown
      timerDisplay.textContent = "00:00";
      onTimerFinish(); // Trigger custom function when timer finishes
    }

    // Increase timeElapsed by 1 second
    timeElapsed++;
  }, 1000);
}

// Function to stop the timer forcefully
function stopTimer() {
  clearInterval(countdown); // Stop the countdown
  timeElapsed = 0; // Reset the timer
}

// Custom function that triggers when the timer finishes
function onTimerFinish() {
  autonext();
}

// Function to handle the timer based on some external update
function updatedetect() {
  stopTimer(); // Stop any existing timer
  startTimer(); // Start a new timer
}
