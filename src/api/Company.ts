import api from "../api/http-commons";
import { Company } from "../models/company";

export default class CompanyAPI {
  private static instance: CompanyAPI;

  private constructor() {}

  static getInstance(): CompanyAPI {
    if (!CompanyAPI.instance) {
      CompanyAPI.instance = new CompanyAPI();
    }
    return CompanyAPI.instance;
  }

  async getCompanyById(id:String): Promise<Company> {
    let company: Company = await (await api.get("/company/"+id)).data
    return company
  }
}
