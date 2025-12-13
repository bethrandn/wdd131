// ===================================
// Job Tracker — Card Layout Version
// Author: Bethrand Nwankwo
// ===================================

const jobForm = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

let jobs = JSON.parse(localStorage.getItem("skillbridgeJobs")) || [];

// Render Jobs
function renderJobs() {
  jobList.innerHTML = "";

  jobs.forEach((job, index) => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h4>${job.company}</h4>
      <p><strong>Role:</strong> ${job.role}</p>
      <span class="badge ${job.status}">${job.status}</span>
      <p><strong>Date Applied:</strong> ${job.date}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;

    jobList.appendChild(card);
  });

  attachDeleteEvents();
}

// Add Job
jobForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newJob = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    status: document.getElementById("status").value,
    date: document.getElementById("date").value
  };

  jobs.push(newJob);
  localStorage.setItem("skillbridgeJobs", JSON.stringify(jobs));

  jobForm.reset();
  renderJobs();
});

// Delete Job
function attachDeleteEvents() {
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      jobs.splice(index, 1);
      localStorage.setItem("skillbridgeJobs", JSON.stringify(jobs));
      renderJobs();
    });
  });
}

// Initial Render
renderJobs();