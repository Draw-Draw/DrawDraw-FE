import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledTitleText,
} from './WriteOrView.style';
import WriteBtn from '../../../../assets/buttons/WriteBtn.svg';
import ViewBtn from '../../../../assets/buttons/ViewBtn.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const WriteOrView = ({
  diaryName,
  diarybookId,
}: {
  diaryName: string | undefined;
  diarybookId: string | undefined;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(diaryName);
  }, []);

  const handleWriteBtnClick = () => {
    navigate(`/drawing/${diarybookId}`);
  };

  const handleViewBtnClick = () => {
    navigate(`/diary/${diarybookId}`);
  };

  return (
    <StyledModalTextContainer>
      <StyledTitleText>"{diaryName}"</StyledTitleText>
      <StyledBtnContainer>
        <StyledBtn src={WriteBtn} onClick={handleWriteBtnClick} />
        <StyledBtn src={ViewBtn} onClick={handleViewBtnClick} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
