import axios from "axios";

const instance = axios.create({
  baseURL: "https://admin.yengema.com",
});

export default instance;
