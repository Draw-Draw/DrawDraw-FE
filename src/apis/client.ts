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

client.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.code === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await client.post('/api/v1/auth/token', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          const newAccessToken = response.data.data.accessToken;
          console.log(newAccessToken);
          localStorage.setItem('accessToken', newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          console.log(response);
          return axios(originalRequest); // 원래 요청 다시 시도
        } catch (refreshError) {
          // 리프레시 토큰 갱신 실패
          console.error('Error refreshing token:', refreshError);
          // 로그인 페이지로 리디렉션 또는 다른 작업 수행
          // 예: navigate('/login');
        }
      }
    }
    return Promise.reject(error);
  }
);
