import api from "../api/http-commons";
import { Genre } from "../models/Genre";
import { Movie } from "../models/movie";

export default class MovieAPI {
  private static instance: MovieAPI;

  private constructor() {}

  static getInstance(): MovieAPI {
    if (!MovieAPI.instance) {
      MovieAPI.instance = new MovieAPI();
    }
    return MovieAPI.instance;
  }

  // now playing  top rated upcoming
  async getPopular(): Promise<Movie[]> {
    let movies: Movie[] = await (await api.get("/movie/popular")).data.results
    return movies
  }
  
  // data es el response, dentro del response , tienes que ver, que hay 
  // eso es en el postman 
  async getLatest(): Promise<Movie> {
    let movies: Movie = await (await api.get("/movie/latest")).data
    return movies
  }

  async getNowPlaying(): Promise<Movie[]> {
    let movies: Movie[] = await (await api.get("/movie/now_playing")).data.results
    return movies
  }

  async getTopRated(): Promise<Movie[]> {
    let movies: Movie[] = await (await api.get("/movie/top_rated")).data.results
    return movies
  }

  async getUpcoming(): Promise<Movie[]> {
    let movies: Movie[] = await (await api.get("/movie/upcoming")).data.results
    return movies
  }

  async getGenres(): Promise<Genre[]> {
    let genres: Genre[] = await (await api.get("/genre/movie/list")).data.genres
    return genres
  }
  
}
