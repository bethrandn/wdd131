// ================================
// Footer: Current Year + Last Modified
// ================================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


// ================================
// SEARCH + FILTER FUNCTIONALITY
// ================================

// Get elements
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

// ================================
// SEARCH FUNCTION
// ================================
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.dataset.category.toLowerCase();

    if (title.includes(searchValue) || tags.includes(searchValue)) {
      card.style.display = "block";
      card.classList.add("fade-in");
    } else {
      card.style.display = "none";
    }
  });
});


// ================================
// FILTER BY CATEGORY
// ================================
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    // Remove active from all
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // Add active to current
    button.classList.add("active");

    const category = button.dataset.filter;

    cards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === "all" || cardCategory.includes(category)) {
        card.style.display = "block";
        card.classList.add("fade-in");
      } else {
        card.style.display = "none";
      }
    });
  });
});


// ================================
// SIMPLE CARD FADE-IN ANIMATION
// ================================
document.querySelectorAll(".project-card").forEach(card => {
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = "0.5s ease";
    card.style.opacity = 1;
  }, 100);
});

// Mobile menu toggle
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("open");
});

