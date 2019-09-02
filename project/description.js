//FILM DESCRIPTION
const filmDescription = async () => {
  const film = await filmTitle();
  const filmJson = await fetch("/data.json");
  const data = await filmJson.json();

  //Assign film description
  for (let i = 0; i < data.films.length; i++) {
    const getTitle = document.querySelectorAll("li");

    getTitle[i].addEventListener("click", function() {
      if (i === 0) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 1) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 2) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 3) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 4) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 5) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 6) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 7) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 8) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 9) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 10) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 11) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 12) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 13) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 14) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 15) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 16) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 17) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 18) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 19) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      } else if (i === 20) {
        const description = document.querySelector(".descriptionP");
        description.innerHTML = data.films[i].description;
      }
    });
  }
};
