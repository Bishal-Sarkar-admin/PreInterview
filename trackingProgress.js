const yourScore = [];

// Function to calculate the overall score
function calculateOverallScore() {
  const overAll = document.getElementById("overall");
  const per = Number(overAll.innerText.replace(/\s|%/g, ""));
  console.log(per);
  yourScore.push(per);
  console.log(yourScore);
}

function chartToggle() {
  const footer = document.getElementById("footer");

  // Check if 'show' class is present
  if (footer.classList.contains("show")) {
    // If 'show' is present, remove it
    footer.classList.remove("show");
  } else {
    // If 'show' is not present, add it
    footer.classList.add("show");
    drawChart(yourScore);
  }
}
