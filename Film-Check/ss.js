"use strict";

const btnSearch = document.querySelector(".search--movie");
const img = document.querySelector(".min--img");
const title = document.querySelector(".title");
const rate = document.querySelector(".rate");
const plot = document.querySelector(".plot");
const cast = document.querySelector(".cast");
const inputTitle = document.querySelector(".type--movie");
const searchForm = document.querySelector(".search--form");
const types = document.querySelector(".info--types");
const rated = document.querySelector(".info--1");
const year = document.querySelector(".info--2");
const runtime = document.querySelector(".info--3");
const main = document.querySelector(".main");
const error = document.querySelector(".error");

btnSearch.addEventListener("click", function () {
  const movieTitle = inputTitle.value;
  const key = "ef9fda3";
  const url = ` http://www.omdbapi.com/?t=${movieTitle}&apikey=${key}`;
  console.log(movieTitle);
  fetch(url)
    .then((res) => {
      if (!res) throw new Error(`Wrong title :/`);
      return res.json();
    })
    .then((data) => {
      main.classList.remove("hidden");
      img.src = data.Poster;
      title.innerHTML = data.Title;
      rate.innerHTML = `⭐${data.imdbRating}`;
      rated.innerHTML = data.Rated;
      year.innerHTML = data.Year;
      runtime.innerHTML = data.Runtime;
      types.innerHTML = `
            <p class="type"> ${data.Genre.split(",").join(
              `</p><p class="type">`
            )}</p>`;
      plot.innerHTML = data.Plot;
      cast.innerHTML = data.Actors;
      error.classList.add("hidden");
      console.log(data);
    })
    .catch((err) => {
      error.classList.remove("hidden");
      main.classList.add("hidden");
      error.innerHTML = `<p> Something went wrong :/.</p> ${err}`;
    });
});
