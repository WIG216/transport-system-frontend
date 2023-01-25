import  { create } from 'apisauce';
import { getToken } from '../utils/storage';
const apiUrlTest  = 'http://localhost:7200';
const  apiUrlLive  =  '';

const api =  create({
    baseURL: apiUrlTest,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

api.addAsyncRequestTransform(async (request) => {
   const authToken = getToken();
   if(!authToken) return;
   request.headers['x-access-token'] = authToken;
})

export default api;