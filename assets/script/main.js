import '../components/toolbar/toolbar-element.js';
import '../components/movie/movie-element.js';
import {Endpoint} from "../config/ApiConfig.js";
import {Movie} from "../components/movie/Movie.js";
import {Toolbar} from "../components/toolbar/Toolbar.js";
import AppConfig from "../config/AppConfig.js";

const page = {
    toolbar: null,
    main: null,
};

const fetchApi = url => {
    return fetch(url).then(response => {
        if(response.status !== 200) {
            return Promise.reject(response.statusText)
        }
        return response.json();
    })
};

document.addEventListener('DOMContentLoaded', () => {
    page.toolbar = document.querySelector('toolbar-element');
    page.main = document.querySelector("main");

    initialToolbar();
    fetchMovie();
});

function fetchMovie() {
    fetchApi(Endpoint.nowPlaying)
        .then(json => {
            json.results.forEach(result => {
                const movieElement = document.createElement('movie-element');
                movieElement.movie = new Movie(result.id, result.title, result.overview, result.backdrop_path);
                page.main.appendChild(movieElement);
            })
        })
        .catch(message => {
            page.main.innerHTML = `<p>${message}</p>`;
        })
}

function initialToolbar() {
    page.toolbar.toolbar = new Toolbar(AppConfig.appName, AppConfig.navigation);
}