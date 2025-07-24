import axios from "axios";

const baseUrl = "/api/pilotos";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getPiloto = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (piloto) => {
  const response = await axios.post(baseUrl, piloto);
  return response.data;
};

export default { getAll, getPiloto, create };
