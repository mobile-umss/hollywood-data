import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0b24b49ff5d11b8cb89272ce0af22bb0",
  },
});
export default api;
