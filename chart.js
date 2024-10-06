// Chart drawing function
function drawChart(scores) {
  const ctx = document.getElementById("scoreChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: scores.map((_, index) => `Score ${index + 1}`),
      datasets: [
        {
          label: "Overall Score Performance",
          data: scores,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Score (%)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Numbers of Submitions",
          },
        },
      },
    },
  });
}
