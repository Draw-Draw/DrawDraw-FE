import { client } from '../../apis/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    client
      .post(``, {
        headers: { Authorization: code },
      })
      .then((r) => {
        console.log(r.data);

        // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
        localStorage.setItem('name', r.data.user_name); // 일단 이름만 저장했다.

        navigate('/onboarding');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>로그인 중입니다.</div>;
};
