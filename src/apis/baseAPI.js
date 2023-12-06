import axios from "axios";
console.log(process.env.BASE_URL);
const api = axios.create({
  baseURL: process.env.BASE_URL,
});


api.interceptors.response.use(
  response =>
  {
    return response;
  },
  error =>
  {
    return Promise.reject(error);
  },
);

// api.defaults.headers.post[ "Content-Type" ] = "multipart/form-data";
// api.defaults.headers.put[ "Content-Type" ] = "multipart/form-data";
// api.defaults.headers.patch[ "Content-Type" ] = "multipart/form-data";

export default api;
