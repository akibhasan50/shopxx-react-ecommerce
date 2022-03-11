import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODI2ZWYzMzMxYmFkMjRiNGY0YzQxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjU0MTY5MCwiZXhwIjoxNjM2ODAwODkwfQ.QJd9VmdfcHh5lGQUIBH4wPT9XKUHmV-7CUoxr-UVTCA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});