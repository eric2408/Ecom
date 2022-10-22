import axios from 'axios';

const BASE_URL = "http://3.83.51.198:8080/api/";
let user;
if (typeof window !== 'undefined') {
  user = JSON.parse(localStorage.getItem("persist:root"))?.user;
}

const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const generalRequest = axios.create({
    baseURL: BASE_URL,
  });
  
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });
