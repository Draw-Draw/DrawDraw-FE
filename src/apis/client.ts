import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

client.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log('에러남');
    if (error.response.status === 401) {
      console.log('에러남?');
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
