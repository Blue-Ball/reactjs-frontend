import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000 * 60 * 1,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
