import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/pipeline",
});

export const runPipeline = (domain) => API.post("/run", { domain });

export const sendEmails = (contacts) => API.post("/send", { contacts });
