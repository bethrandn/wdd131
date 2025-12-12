// =============================
// Footer Date Updates
// =============================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


// =============================
// Job Tracker Functionality
// =============================
const jobForm = document.getElementById("jobForm");
const jobBody = document.getElementById("jobBody");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];


// =============================
// Render Jobs
// =============================
function renderJobs() {
  jobBody.innerHTML = "";

  jobs.forEach((job, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.position}</td>
      <td>${job.status}</td>
      <td>${job.date}</td>
      <td>
        <button class="action-btn edit" onclick="editJob(${index})">Edit</button>
        <button class="action-btn delete" onclick="deleteJob(${index})">Delete</button>
      </td>
    `;

    jobBody.appendChild(row);
  });

  localStorage.setItem("jobs", JSON.stringify(jobs));
}

renderJobs();


// =============================
// Add Job
// =============================
jobForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newJob = {
    company: document.getElementById("company").value,
    position: document.getElementById("position").value,
    status: document.getElementById("status").value,
    date: document.getElementById("date").value
  };

  jobs.push(newJob);
  renderJobs();
  jobForm.reset();
});


// =============================
// Delete Job
// =============================
function deleteJob(index) {
  jobs.splice(index, 1);
  renderJobs();
}


// =============================
// Edit Job
// =============================
function editJob(index) {
  const job = jobs[index];

  document.getElementById("company").value = job.company;
  document.getElementById("position").value = job.position;
  document.getElementById("status").value = job.status;
  document.getElementById("date").value = job.date;

  deleteJob(index);
}
