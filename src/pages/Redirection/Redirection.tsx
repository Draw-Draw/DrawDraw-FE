import { client } from '../../apis/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const search = new URLSearchParams(window.location.search);
      const code = search.get('code');
      console.log(code);

      if (code) {
        try {
          const response = await client.post('/api/v1/auth', null, {
            headers: {
              Authorization: code,
            },
          });
          if (response.data.data.isExist === 'false') {
            navigate('/onboarding');
          } else {
            navigate('/');
            localStorage.setItem('accessToken', response.data.data.accessToken);
            localStorage.setItem('refreshToken', response.data.data.refreshToken);
          }
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  return <div>로그인 중입니다.</div>;
};
