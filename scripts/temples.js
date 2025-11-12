// scripts/getdates.js

// Display current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
