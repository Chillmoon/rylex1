import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-shark.herokuapp.com",
  headers: { Authorization: `Bearer *token*` },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const logIn = (username, password) => {
  return instance
    .post("/login", {
      username: username,
      password: password,
    })
    .then((response) => response.data.accessToken);
};

export const signUp = (userData) => {
  return instance.post("/signup", userData);
};

export const loadTable = () => {
  return instance.get("/tenants");
};

export const addTenant = (userData) => {
  instance.post("/tenants", userData);
};
