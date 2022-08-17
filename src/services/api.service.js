import axios from "axios";

export const ApiService = axios.create({
  baseURL: "https://localhost:5001/",
  headers: {
    'Content-Type': 'application/json'
  }
});