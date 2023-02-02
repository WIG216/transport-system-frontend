import api from "./apiClient";

const registerUser = (data) => {
    return api.post('/user/signup', data);
}

const loginUser = (data) => {
    return api.post('/user/login', data);
}

const registerDriver = (data) => {
    return api.post('/driver/signup', data);
}

const loginDriver = (data) => {
    return api.post('/driver/login', data);
}

export {
    registerUser,
    loginUser,
    registerDriver,
    loginDriver
}

