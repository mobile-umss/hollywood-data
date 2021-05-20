import api from "../api/http-commons";
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

}
