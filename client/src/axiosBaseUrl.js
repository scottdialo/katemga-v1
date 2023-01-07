import axios from "axios";

const instance = axios.create({
  baseURL: "https://katemga-v1.adaptable.app",
});

export default instance;
