//import {} from "./images.js";

//--------------------------------------------------------
// ASYNCH
//--------------------------------------------------------

const filmData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Ghibli films for you"), 1000);
  });
};

//Show Film Section
const filmSection = async () => {
  const film = await filmData();
  const filmJson = await fetch("/data.json");
  const data = await filmJson.json();

  //Display films
  for (let i = 0; i < data.films.length; i++) {
    const getTitle = document.querySelectorAll("li");

    getTitle[i].addEventListener("click", function() {
      document.querySelector("#display").style.display = "block";
    });
  }
};

//FILM TITLE

const filmTitle = async () => {
  const film = await filmSection();
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
//FILM IMAGE COVER
const filmImg = async () => {
  const film = await filmTitle();
  const filmJson = await fetch("/data.json");
  const data = await filmJson.json();

  //Assign film title
  for (let i = 0; i < data.films.length; i++) {
    const getTitle = document.querySelectorAll("li");

    getTitle[i].addEventListener("click", function() {
      if (i === 0) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 1) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 2) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 3) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 4) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 5) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 6) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 7) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 8) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 9) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 10) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 11) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 12) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 13) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 14) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 15) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 16) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 17) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 18) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 19) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      } else if (i === 20) {
        const image = document.querySelector(".filmImg");
        image.src = data.films[i].cover;
      }
    });
  }
};

//FILM DESCRIPTION
const filmDescription = async () => {
  const film = await filmImg();
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

filmYear().then(res => {
  //console.log(res);
});
