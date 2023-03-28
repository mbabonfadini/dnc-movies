import axios from "axios";

const API_KEY = "18f5dc19752468c7b1b19e4ceb038e19"
const LINK_API = "https://api.themoviedb.org/3/"

const withBaseUrl = (path)=> `${LINK_API}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"))
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie")+`&query=${movie}`)
    }
}
    
