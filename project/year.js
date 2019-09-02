//FILM YEAR
const filmYear = async () => {
  const film = await filmDescription();
  const filmJson = await fetch("/data.json");
  const data = await filmJson.json();
  //Assign film release year
  for (let i = 0; i < data.films.length; i++) {
    const getTitle = document.querySelectorAll("li");

    getTitle[i].addEventListener("click", function() {
      if (i === 0) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 1) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 2) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 3) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 4) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 5) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 6) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 7) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 8) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 9) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 10) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 11) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 12) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 13) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 14) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 15) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 16) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 17) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 18) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 19) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      } else if (i === 20) {
        const year = document.querySelector(".year");
        year.innerHTML = data.films[i].release_date;
      }
    });
  }
};
