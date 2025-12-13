// ===================================
// Portfolio Modal + Search + Filters
// Author: Bethrand Nwankwo
// ===================================

// Portfolio modal data for 9 projects
const projects = {
  1: {
    title: "Weather App",
    img: "images/project1.jpg",
    description: "A weather app that fetches live data from OpenWeatherMap and shows hourly forecasts.",
    tech: ["JavaScript", "API", "Responsive"],
    link: "#"
  },
  2: {
    title: "Temple Gallery",
    img: "images/project2.jpg",
    description: "A dynamic gallery that builds temple cards from an array with filters and lazy-loading.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  3: {
    title: "To-Do List",
    img: "images/project3.jpg",
    description: "Simple to-do app with localStorage and friendly UI for daily tasks.",
    tech: ["JavaScript", "LocalStorage"],
    link: "#"
  },
  4: {
    title: "Mini Blog (Flask)",
    img: "images/project4.jpg",
    description: "A prototype blog app using Flask for routing and Jinja templates for views.",
    tech: ["Python", "Flask", "Templating"],
    link: "#"
  },
  5: {
    title: "Marketing Landing",
    img: "images/project5.jpg",
    description: "Responsive landing page with form validation and clear calls-to-action.",
    tech: ["HTML", "CSS", "UX"],
    link: "#"
  },
  6: {
    title: "Canvas Game",
    img: "images/project6.jpg",
    description: "A small browser game built with Canvas API including collision detection.",
    tech: ["JavaScript", "Canvas"],
    link: "#"
  },
  7: {
    title: "Movie Search",
    img: "images/project7.jpg",
    description: "Search movies via a public API with results, details and pagination.",
    tech: ["API", "JavaScript"],
    link: "#"
  },
  8: {
    title: "Data Visualizer",
    img: "images/project8.jpg",
    description: "CSV parser that builds charts and visual insights using chart libraries.",
    tech: ["Python", "Data"],
    link: "#"
  },
  9: {
    title: "Responsive Grid Demo",
    img: "images/project9.jpg",
    description: "A set of responsive grid patterns and card layouts for modern websites.",
    tech: ["HTML", "CSS"],
    link: "#"
  }
};

// Modal elements
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTechList");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

// Show modal when clicking a card
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.project;
    const p = projects[id];

    if (!p) return;

    modalImg.src = p.img;
    modalImg.alt = p.title + " preview";
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.description;

    modalTech.innerHTML = "";
    p.tech.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      modalTech.appendChild(li);
    });

    modalLink.href = p.link;

    modal.setAttribute("aria-hidden", "false");
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.setAttribute("aria-hidden", "true");
});

// Search + Filter
const searchBox = document.getElementById("searchBox");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

searchBox.addEventListener("input", () => {
  const q = searchBox.value.trim().toLowerCase();

  projectCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    card.style.display = (title.includes(q) || desc.includes(q)) ? "" : "none";
  });
});

// Filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const cats = card.dataset.categories.toLowerCase();

      if (filter === "all" || cats.includes(filter.toLowerCase())) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});