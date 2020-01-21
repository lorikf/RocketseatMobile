import axios from 'axios';

api = axios.create({
    baseURL: 'http://192.168.15.17:3334',
})

export default api;