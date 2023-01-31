import api from "./apiClient";

const createVehicle = (data) => {
  return api.post("/vehicle/", data);
};

const getVehicles = () => {
  return api.get("/vehicles ");
};

const updateVehicle = (id, data) => {
  return api.get(`/vehicle/${id}`, data);
};

const deleteVehicle = (id) => {
  return api.delete(`/vehicle/${id}`);
};

export { createVehicle, getVehicles, updateVehicle, deleteVehicle };
