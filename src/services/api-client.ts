import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a6734902552423084f08c60cfb740ac",
  },
});
