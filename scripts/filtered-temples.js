
// Footer Dates

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;


// Mobile Menu

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});


// Temple Data

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Madrid Temple Spain",
    location: "Madrid City, Spain",
    dedicated: "1996, June, 11",
    area: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54292.jpg"
  },
  {
    templeName: "Birmingham Alabama Temple",
    location: "Gardendale Alabama, USA",
    dedicated: "1999, October, 9",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-12378.jpg"
  },
  {
    templeName: "Oakland California Temple",
    location: "Oakland California, USA",
    dedicated: "1962, May, 26",
    area: 80157,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-65666.jpg"
  }
];


function createTempleCard(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}

// Show all at load
createTempleCard(temples);


// Navigation Filters

document.querySelector("#home").addEventListener("click", () => {
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  createTempleCard(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
  createTempleCard(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area < 10000));
});
