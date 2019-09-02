//FILM TITLE
const filmTitle = async () => {
  const film = await filmData();
  const filmJson = await fetch("/data.json");
  const data = await filmJson.json();

  //Assign film title
  for (let i = 0; i < data.films.length; i++) {
    const getTitle = document.querySelectorAll("li");

    getTitle[i].addEventListener("click", function() {
      if (i === 0) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 1) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 2) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 3) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 4) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 5) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 6) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 7) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 8) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 9) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 10) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 11) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 12) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 13) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 14) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 15) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 16) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 17) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 18) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 19) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      } else if (i === 20) {
        const title = document.querySelector("h1");
        title.innerHTML = data.films[i].title;
      }
    });
  }
};

export default filmTitle();
