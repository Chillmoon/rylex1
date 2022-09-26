import React from "react";
import axios from "axios";

export const logIn = (username, password) => {
  return axios
    .post("https://api-shark.herokuapp.com/login", {
      username: username,
      password: password,
    })
    .then(function (response) {
      localStorage.setItem("token", response.data.accessToken);
      const token = localStorage.getItem("token");
      console.log(token);
    })
    .catch((err) => err);
};

export const signUp = (userData) => {
  return axios
    .post("https://api-shark.herokuapp.com/signup", {
      username: userData.username,
      password: userData.password,
      email: userData.email,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch((err) => err);
};

export const tableData = () => {
  return (
    axios
      .get("https://api-shark.herokuapp.com/tenants", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      // .then(function (response) {
      //   console.log(response.data);
      // })
      .catch((err) => err)
  );
};

export const addTableData = (userData) => {
  axios
    .post("https://api-shark.herokuapp.com/tenants", userData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((err) => err);
};
