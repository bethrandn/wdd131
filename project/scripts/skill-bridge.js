/* =======================================
   MOBILE NAVIGATION TOGGLE
   ======================================= */
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* =======================================
   BACK TO TOP BUTTON
   ======================================= */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =======================================
   THEME TOGGLE (LIGHT / DARK MODE)
   ======================================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "skillbridge-theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

// Load saved theme
const savedTheme = localStorage.getItem("skillbridge-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

/* =======================================
   FOOTER YEAR + LAST MODIFIED
   ======================================= */
const yearSpan = document.getElementById("currentyear");
const lastModifiedP = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedP) {
  lastModifiedP.textContent = "Last updated: " + document.lastModified;
}