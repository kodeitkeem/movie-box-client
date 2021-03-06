const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "e1aceb53142b1701d29b1d5b96ba0a76"

const endpoints = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    getFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    getSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}

function getGenres(movieId){
    return fetch(BASE_URL + `/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => res.json())
    .catch(err => {
        console.log(err);
    })
}

function getCredits(movieId){
    return fetch(BASE_URL + `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`).then(res => res.json())
    .catch(err => {
        console.log(err);
    })
}


function getMovieEndpoint(){
    return fetch(BASE_URL + endpoints.getTrending).then(res => res.json()).catch(err => {
        console.log(err)
    });
}

function getOriginals(){
    return fetch(BASE_URL + endpoints.getOriginals).then(res => res.json()).catch(err => {
        console.log(err)
    });
}

function getAction(){
    return fetch(BASE_URL + endpoints.getAction).then(res => res.json()).catch(err => {
        console.log(err)
    });
}

function getComedy(){
    return fetch(BASE_URL + endpoints.getComedy).then(res => res.json()).catch(err => {
        console.log(err)
    });
}

function getDocumentaries(){
    return fetch(BASE_URL + endpoints.getDocumentaries).then(res => res.json()).catch(err => {
        console.log(err)
    });
}

function getFamily(){
    return fetch(BASE_URL + endpoints.getFamily).then(res => res.json()).catch(err => {
        console.log(err)
    });
}



function getSciFi(){
    return fetch(BASE_URL + endpoints.getSciFi).then(res => res.json()).catch(err => {
        console.log(err)
    });
}



export {
    getMovieEndpoint,
    getOriginals,
    getAction,
    getGenres,
    getCredits,
    getComedy,
    getDocumentaries,
    getFamily,
    getSciFi
}