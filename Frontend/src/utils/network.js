import axios from "axios";
export const baseUrl = "http://localhost:5000/api/";
export const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000000,
  headers: {
    "Content-Type": "application/json", // Or whatever content type your API expects
  },
});

export const saveToken = axios.create({
  baseURL: baseUrl,
  timeout: 10000000,
  headers: {
    "Content-Type": "application/json", // Or whatever content type your API expects
  },
});

export const getApi = async (endpoint) => {
  try {
    const response = await api.get(`${endpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApi = async (endpoint, postData) => {
  try {
    const response = await api.post(`${endpoint}`, postData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
