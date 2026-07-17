import axios from "axios";

const api = axios.create({
  baseURL: "https://interviewgenieai-backend-v67z.onrender.com",
});

export default api;