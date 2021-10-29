import { api } from './Api.js';
import Dom from './Dom.js';
import { key } from './Api.js';

let res;
window.onload = async function fetchData() {
    document.getElementById("search_btn").addEventListener("click", search);
    const req = await fetch(api);
    res = await req.json();
    const data = res.results;

    Dom.innerHTML = `<div class="inner-card">${data
        .map(
            (itr) =>
                `<div class="each-card">
                    <img class="movie--poster" src="https://image.tmdb.org/t/p/w500${itr.backdrop_path}" draggable="true" / >
                    <h2 class="movie--title">${itr.original_title}</h2>
                    <div class="movie--details">
                      <p class="movie--description">${itr.overview}</p>
                      <p class="movie--release-date">Release date: ${itr.release_date}</p>
                      <p class="movie--popularity">Rating: ${itr.vote_average}</p>
                    </div>
                </div>
                `
        )
        .join('')}</div>`;
};

function search() {
    var input = document.getElementById("search").value;
    window.open(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input}`,
        "TMDB", "menubar=1,resizable=0,width=500,height=500");
}