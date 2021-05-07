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

  async getTopRated(): Promise<Movie[]> {
    let movies: Movie[] = await (await api.get("/movie/popular")).data.results
    return movies
  }
}
