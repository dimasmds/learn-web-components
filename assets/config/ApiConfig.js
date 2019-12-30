const Config = {
    baseURL: "https://api.themoviedb.org/3/",
    baseImageURL: "https://image.tmdb.org/t/p/w500/",
    language: "en-us",
    key: "4a6eac5979a646031dc1c7a3cd7a2697",
};

const Endpoint = {
    nowPlaying: `${Config.baseURL}movie/now_playing?api_key=${Config.key}&language=${Config.language}`,
    upcoming: `${Config.baseURL}movie/upcoming?api_key=${Config.key}&language=${Config.language}`
};

export {Config, Endpoint}