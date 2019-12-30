import {Config} from '../../config/ApiConfig.js'

class MovieElement extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    set movie(movie) {
        this.root.innerHTML = `
        <style>
        * {
           padding: 0;
           margin: 0;
           box-sizing: border-box;
        }
        
        :host {
            display: block;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }

        .poster-card {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }

        .card-info {
            padding: 24px;
        }

        .card-info > h2 {
            font-weight: lighter;
        }

        .card-info > p {
            margin-top: 10px;
        }
        </style>
        <img class="poster-card" src="${Config.baseImageURL + movie.backdrop}" alt="backdrop">
        <div class="card-info">
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
        </div>
`
    }
}

customElements.define('movie-element', MovieElement);