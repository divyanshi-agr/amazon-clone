import axios from "./axios";

const instance = axios.create({
  baseURL: "...", //the api(cloud funcn) url
});

export default instance;
