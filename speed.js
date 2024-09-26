async function checkInternetSpeed() {
  const fileUrl =
    "https://cors-anywhere.herokuapp.com/https://speed.hetzner.de/1MB.bin";
  const fileSizeInBytes = 1048576; // 1 MB

  const startTime = new Date().getTime();

  try {
    const response = await fetch(fileUrl);
    const data = await response.blob();

    const endTime = new Date().getTime();
    const durationInSeconds = (endTime - startTime) / 1000;

    const speedBps = (fileSizeInBytes * 8) / durationInSeconds;
    const speedMbps = speedBps / (1024 * 1024);

    document.getElementById("speedResult").textContent = `${speedMbps.toFixed(
      2
    )} Mbps`;
  } catch (error) {
    document.getElementById("speedResult").textContent =
      "Error fetching Internet Speed. Please try again later.";
  }
}

// Function to detect online status
function updateOnlineStatus() {
  if (navigator.onLine) {
    checkInternetSpeed(); // Call speed test when online
  } else {
    document.getElementById("speedResult").textContent = "0 Mbps";
  }
}

// Add event listener for "online" event to check internet speed when back online
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
// Call the function initially to check the status when the page loads
updateOnlineStatus();
