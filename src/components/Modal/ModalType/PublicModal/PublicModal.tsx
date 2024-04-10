import {
  StyledBtn,
  StyledBtnContainer,
  StyledModalTextContainer,
  StyledSubText,
  StyledTitleText,
} from './PublicModal.style';
import PublicBtn from '../../../../assets/buttons/PublicBtn.svg';
import PrivateBtn from '../../../../assets/buttons/PrivateBtn.svg';
import { useSetModalType } from '../../../../hook/useSetModalType';
import { useRecoilState } from 'recoil';
import { PostDiaryState } from '../../../../recoil/PostDiaryState';
import { DiaryBookType } from '../../../../types/DiaryBook.type';

export const PublicModal = () => {
  const setModalType = useSetModalType();
  const [postDiaryState, setPostDiaryState] = useRecoilState(PostDiaryState);

  const handleModalType = (openValue: boolean) => {
    setPostDiaryState((prevPostDiaryState: DiaryBookType) => ({
      ...prevPostDiaryState,
      open: openValue,
    }));
    setModalType('GODRAW');
  };

  const handlePublicBtnClick = () => {
    handleModalType(true);
  };

  const handlePrivateBtnClick = () => {
    handleModalType(false);
  };

  return (
    <StyledModalTextContainer>
      <div>
        <StyledTitleText>이 일기장을 공개할건가요?</StyledTitleText>
        <StyledSubText>
          공개 설정을 하면, 모든 친구들이 볼 수 있어요.
          <br />
          비공개 설정을 하면, 나만 볼 수 있어요.
        </StyledSubText>
      </div>
      <StyledBtnContainer>
        <StyledBtn src={PublicBtn} onClick={handlePublicBtnClick} />
        <StyledBtn src={PrivateBtn} onClick={handlePrivateBtnClick} />
      </StyledBtnContainer>
    </StyledModalTextContainer>
  );
};
