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

  // Manually add the 'show' class
  footer.classList.add("show");
  drawChart(yourScore);
  // Manually remove the 'show' class after 8s for testing
  setTimeout(() => {
    footer.classList.remove("show");
  }, 8000);
}
