//Typically we would store on {process.env.API_KEY}
const API_KEY = "52cfd5de89506de4dce69e2a3ad87cc5";


// https://api.themoviedb.org/3/discover/tv?api_key=52cfd5de89506de4dce69e2a3ad87cc5&with_networks=213
// f819080ff410e46f422d64ddf3a56dddd from tutorial
// 52cfd5de89506de4dce69e2a3ad87cc5 my registered api

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;