import axios from "axios";

const BASEURL = import.meta.env.VITE_BACKEND_API_URL;

console.log("Server running on: ", BASEURL);

export const api = axios.create({
	baseURL: BASEURL,
});
