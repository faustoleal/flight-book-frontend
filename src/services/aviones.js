import axios from "axios";

const baseUrl = "/api/aviones";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (avion) => {
  const response = await axios.post(baseUrl, avion);
  return response.data;
};

export default { getAll, create };
