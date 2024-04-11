import { Outlet, useNavigate } from 'react-router-dom';
import { StyledContainer, StyledLogo } from './Register.style';
import Logo from '../../assets/Logo.png';

export const Register = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <StyledContainer>
      <StyledLogo src={Logo} onClick={handleGoHome} />
      <Outlet />
    </StyledContainer>
  );
};
