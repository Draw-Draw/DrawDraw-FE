import { useNavigate } from 'react-router-dom';
import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledSubText,
  StyledTitleText,
} from './GoDrawModal.style';
import YesBtn from '../../../../assets/buttons/YesBtn.svg';
import NoBtn from '../../../../assets/buttons/NoBtn.svg';
import { postDiaryBook } from '../../../../apis/postDiaryBook';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PostDiaryState } from '../../../../recoil/PostDiaryState';
import { SelectDiaryBookState } from '../../../../recoil/SelectDiaryBookState';

export const GoDrawModal = () => {
  const navigate = useNavigate();
  const postDiaryState = useRecoilValue(PostDiaryState);
  const [diaryBookState, setDiaryBookState] = useRecoilState(SelectDiaryBookState);

  const handleGoDraw = async () => {
    try {
      const response = await postDiaryBook(postDiaryState);
      navigate(`/drawing/${response}`);
    } catch (error) {
      console.error('postDiaryBook 요청 중 오류 발생:', error);
    }
  };

  const handleGoMain = async () => {
    try {
      navigate(`/`);
    } catch (error) {
      console.error('postDiaryBook 요청 중 오류 발생:', error);
    }
  };
  return (
    <StyledModalTextContainer>
      <div>
        <StyledTitleText>바로 오늘의 일기를 작성해볼까요?</StyledTitleText>
        <StyledSubText>여러분들의 이야기를 차곡차곡 채워주세요.</StyledSubText>
      </div>
      <StyledBtnContainer>
        <StyledBtn src={YesBtn} onClick={handleGoDraw} />
        <StyledBtn src={NoBtn} onClick={handleGoMain} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
