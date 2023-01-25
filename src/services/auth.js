import api from "./apiClient";

const registerUser = (data) => {
    return api.post('/user/signup', data);
}

const loginUser = (data) => {
    return api.post('/user/login', data);
}

export {
    registerUser,
    loginUser
}

