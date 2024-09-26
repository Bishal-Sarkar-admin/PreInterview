// Function to update the connection status
function updateOnlineStatus() {
  const statusText = navigator.onLine ? "Online" : "Offline";
  document.getElementById("status").textContent = `${statusText}`;
  return statusText;
}

// Check connection on page load
updateOnlineStatus();

// Add event listeners for online and offline events
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
