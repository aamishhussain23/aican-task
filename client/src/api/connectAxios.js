import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://aican-task.onrender.com/api/',
});

export default apiClient;