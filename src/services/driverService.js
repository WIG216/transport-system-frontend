import http from "../http-common";

class DriverDataService {
  getAllDrivers() {
    return http.get("/drivers");
  }

  getDriversById(id) {
    return http.get(`/driver/${id}`);
  }

  createDriver(data) {
    return http.post("/driver", data);
  }

  updateDriver(id, data) {
    return http.put(`/drivers/${id}`, data);
  }

  deleteDriver(id) {
    return http.delete(`/driver/${id}`);
  }
}

export default  DriverDataService();
