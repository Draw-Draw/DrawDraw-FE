import { useState } from 'react';
import {
  CardContainer,
  StyledCardClip,
  StyledContainer,
  StyledInput,
  StyledLogo,
  StyledSelectBtn,
  StyledTitleContainer,
  StyledTitleText,
} from './OnBoarding.style';
import Logo from '../../assets/Logo.png';
import CardClip from '../../assets/CardClip.png';
import DisabledSelectBtn from '../../assets/buttons/DisabledSelectBtn.svg';
import SelectBtn from '../../assets/buttons/SelectBtn.svg';
import { getNickname } from '../../apis/postNickname';
import { useNavigate } from 'react-router-dom';

export const Onboarding = () => {
  const [inputValue, setInputValue] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await getNickname(inputValue);
      setNickname(response.nickname);
      navigate('/register');
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  return (
    <StyledContainer>
      <StyledLogo src={Logo} />
      <CardContainer>
        <StyledCardClip src={CardClip} />
        <StyledTitleContainer>
          <StyledTitleText>닉네임을 정해보자!</StyledTitleText>
          <StyledInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="닉네임을 적어주세요"
          />
        </StyledTitleContainer>
        <StyledSelectBtn
          src={inputValue.length > 0 ? SelectBtn : DisabledSelectBtn}
          onClick={inputValue.length > 0 ? handleSubmit : undefined}
        />
      </CardContainer>
    </StyledContainer>
  );
};
