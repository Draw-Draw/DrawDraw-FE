import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledLogo } from './Register.style';
import Logo from '../../assets/Logo.png';

export const Register = () => {
  return (
    <StyledContainer>
      <StyledLogo src={Logo} />
      <Outlet />
    </StyledContainer>
  );
};
