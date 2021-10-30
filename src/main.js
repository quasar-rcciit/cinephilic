import { api } from './Api.js';
import Dom from './Dom.js';
import { key } from './Api.js';
let modal = document.querySelector('.modal')
let body = document.querySelector('body')
body.addEventListener('click',closemodal)

let res;
function closemodal(e)
{ if(e.target.classList.contains('fa-times'))
    modal.style.display='none'

}
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
    if(input.length===0)
    return;
    modal.style.display = 'block';
    const search =`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${input}`
    const fetchSearchData =  async ()=>{
        const req = await fetch(search);
        let {results} = await req.json();
        console.log(results);
        modal.innerHTML=`<div class="searchcard">
        <span class="closebtn">
                   <i class="fas fa-times fa-2x"></i>
                </span>
        <img class="movie--poster" src="https://image.tmdb.org/t/p/w500${results[0].backdrop_path}" draggable="true" / >
        <h2 class="movie--title">${results[0].original_title}</h2>
        <div class="movie--details">
          <p class="movie--description">${results[0].overview}</p>
          <p class="movie--release-date">Release date: ${results[0].release_date}</p>
          <p class="movie--popularity">Rating: ${results[0].vote_average}</p>
        </div>    
    </div>`
    }
    fetchSearchData()


}