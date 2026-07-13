import axios from "axios";

const baseUrl = "/api/horas";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async (id, page) => {
  const response = await axios.get(
    `${baseUrl}/${id}?limit=15&page=${page - 1}`,
  );
  return response.data;
};

const getTotales = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/totales`);
  return response.data;
};

// Service de crear hora para API hecha con Express.js

const createParaExpress = async (horas) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, horas, config);
  return response.data;
};

// Service de create hora para API hecha con Python + FastAPI

const createParaFastAPI = async (horas) => {
  const response = await axios.post(baseUrl, horas);
  return response.data;
};

export default {
  getAll,
  createParaExpress,
  createParaFastAPI,
  setToken,
  getTotales,
};
