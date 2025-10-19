import axios from "axios";

const authApiClient = axios.create({
    baseURL: "https://drivnbd-serverside.vercel.app/api/v1",
});

authApiClient.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("authTokens"))?.access;
    if (token) config.headers.Authorization = `JWT ${token}`;
    return config;
});

export default authApiClient;
