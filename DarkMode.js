function toggleTheme() {
  const body = document.getElementById("page-body");
  const themeButton = document.getElementById("toggleTheme");

  // Toggle the dark mode class on the body element
  body.classList.toggle("dark-mode");
}
