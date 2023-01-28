import api from "./apiClient";

const createDriver = (data) => {
  return api.post("/driver", data);
};

const getDriver = () => {
  return api.get("/driver");
};

const updateDriver = (id, data) => {
  return api.get(`/driver/${id}`, data);
};

const deleteDriver = (id) => {
  return api.delete(`/driver/${id}`);
};

export { createDriver, getDriver, updateDriver, deleteDriver };
