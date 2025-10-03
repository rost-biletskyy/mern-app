import axios from "axios";

const baseURL =
  (typeof window !== "undefined" ? process.env.NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL) ??
  "http://localhost:5000";

export const http = axios.create({ baseURL });
