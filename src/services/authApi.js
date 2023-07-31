// authApi.js
import { axiosInstance } from "../config/axios";

const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("api/createUser", userData);
    console.log("Response -", response);
    return response;
  } catch (e) {
    console.log("Error while calling API -", e?.response?.data?.message);
    const bracketedError = /\((.*?)\)/.exec(e?.response?.data?.message)?.[1];
    if (bracketedError) {
      alert(bracketedError);
    } else {
      alert("Unknown error occurred.");
    }
    return;
  }
};

const loginApi = async (userData) => {
  try {
    const response = await axiosInstance.post("api/login", userData);
    console.log("Response -", response);
    return response;
  } catch (e) {
    console.log("Error while calling API -", e?.response?.data?.message);
    const bracketedError = /\((.*?)\)/.exec(e?.response?.data?.message)?.[1];
    if (bracketedError) {
      alert(bracketedError);
    } else {
      alert("Unknown error occurred.");
    }
    return;
  }
};

export { createUser, loginApi };
