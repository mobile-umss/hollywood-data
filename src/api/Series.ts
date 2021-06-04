import api from "../api/http-commons";
import { Serie } from "../models/series";

export default class SeriesAPI {
  private static instance: SeriesAPI;

  private constructor() {}

  // latest,tv airing today, top rated
  static getInstance(): SeriesAPI {
    if (!SeriesAPI.instance) {
      SeriesAPI.instance = new SeriesAPI();
    }
    return SeriesAPI.instance;
  }

  async getPopular(): Promise<Serie[]> {
    let series: Serie[] = await (await api.get("/tv/popular")).data.results
    return series
  }

  async getLatest(): Promise<Serie> {
    let series: Serie = await (await api.get("/tv/latest")).data
    return series
  }

  async getTvAiringToday(): Promise<Serie[]> {
    let series: Serie[] = await (await api.get("/tv/airing_today")).data.results
    return series
  }

  async getTopRated(): Promise<Serie[]> {
    let series: Serie[] = await (await api.get("/tv/top_rated")).data.results
    return series
  }

}
