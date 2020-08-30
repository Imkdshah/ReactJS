require('dotenv').config();
const APIKEY = process.env.REACT_APP_key;



const requests ={

    fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated :  `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`

}


export default requests;