import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

client.interceptors.request.use(
  async (config) => {
    const response = await axios.get('http://13.125.42.202:8080/api/v1/auth');
    const token = response.data.data.accessToken;

    console.log(token);

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
