import React from "react";
import axios from "axios";

export const logIn = (username, password, successCallback) => {
  return axios
    .post("https://api-shark.herokuapp.com/login", {
      username: username,
      password: password,
    })
    .then(function (response) {
      localStorage.setItem("token", response.data.accessToken);
      const token = localStorage.getItem("token");
      successCallback && successCallback();
    })
    .catch((err) => err);
};

export const signUp = (userData, successCallback) => {
  return axios
    .post("https://api-shark.herokuapp.com/signup", {
      username: userData.username,
      password: userData.password,
      email: userData.email,
    })
    .then(function (response) {
      console.log(response);
      successCallback && successCallback();
    })

    .catch((err) => err);
};

export const tableData = () => {
  return axios
    .get("https://api-shark.herokuapp.com/tenants", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

    .catch((err) => err);
};

export const addTableData = (userData) => {
  const cleanDeep = require("clean-deep");
  const values = {
    name: userData.username,
    type: userData.type.trim(),
    email: userData.email,
    address: {
      street: userData.street,
      city: userData.city,
      zipCode: userData.zipCode,
      country: userData.country,
    },
    contactInfo: {
      name: userData.name,
      phoneNumber: userData.phoneNumber,
      email: userData.emailContact,
    },
  };
  const cleanValues = cleanDeep(values);

  axios
    .post("https://api-shark.herokuapp.com/tenants", cleanValues, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => console.log(response))
    .catch((err) => err);
};

export const editTenant = ({ userData, id, tenantData }) => {
  const cleanDeep = require("clean-deep");
  const values = {
    name: tenantData.name,
    type: tenantData.type,
    email: userData.email,
    address: {
      street: userData.street,
      city: userData.city,
      zipCode: userData.zipCode,
      country: userData.country,
    },
    contactInfo: {
      name: userData.name,
      phoneNumber: userData.phoneNumber,
      email: userData.emailContact,
    },
  };
  const cleanValues = cleanDeep(values);
  console.log(id);
  axios
    .put(`https://api-shark.herokuapp.com/tenants/${id}`, cleanValues, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((err) => err);
};

export const test = (id) => {
  axios
    .get(`https://api-shark.herokuapp.com/tenants/${id}/phoneNumbers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((err) => err);
};
