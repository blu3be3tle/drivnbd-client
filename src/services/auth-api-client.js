import axios from "axios";

const authApiClient = axios.create({
    baseURL: "https://drivnbd-serverside.vercel.app/api/v1",
});

authApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authTokens");
        if (token) {
            const access = JSON.parse(token)?.access;
            console.log("JWT token attached:", access?.slice(0, 15));
            config.headers.Authorization = `JWT ${access}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default authApiClient;
