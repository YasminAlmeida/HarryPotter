import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://hp-api.herokuapp.com/api',
});
