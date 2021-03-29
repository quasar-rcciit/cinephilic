import Api from './Api.js';
import Dom from './Dom.js';

let res;
window.onload = async function fetchData() {
    const req = await fetch(Api);
    res = await req.json();
    const data = res.results;
    console.log(data);

    Dom.innerHTML = `<div class="inner-card">${data
        .map(
            (itr) =>
                `<div class="each-card">
                    <img class="movie--poster" src="https://image.tmdb.org/t/p/w500${itr.backdrop_path}" draggable="true" / >
                    <h2 class="movie--title">${itr.original_title}</h2>
                    <p class="movie--description">${itr.overview}</p>
                    <p class="movie--release-date">Release date: ${itr.release_date}</p>
                    <p class="movie--popularity">Popularity: +${itr.popularity}</p>
                </div>
                `
        )
        .join('')}</div>`;
};