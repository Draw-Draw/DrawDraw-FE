import {
  StyledModalContainer,
  StyledStamp,
  StyledStampGrid,
  StyledTitleText,
} from './StampModal.style';
import BlueStamp from '../../../../assets/Stamps/BlueStamp.svg';
import PurpleStamp from '../../../../assets/Stamps/PurpleStamp.svg';
import OrangeStamp from '../../../../assets/Stamps/OrangeStamp.svg';
import YellowStamp from '../../../../assets/Stamps/YellowStamp.svg';
import RedStamp from '../../../../assets/Stamps/RedStamp.svg';
import GreenStamp from '../../../../assets/Stamps/GreenStamp.svg';
import { useSetModalType } from '../../../../hook/useSetModalType';

export const StampModal = () => {
  const setModalType = useSetModalType();

  const handleModalType = () => {
    setModalType('COMMENT');
  };

  return (
    <StyledModalContainer>
      <StyledTitleText>도장을 선택해주세요!</StyledTitleText>
      <StyledStampGrid>
        <StyledStamp type="blue" src={BlueStamp} onClick={handleModalType} />
        <StyledStamp type="green" src={GreenStamp} />
        <StyledStamp type="purple" src={PurpleStamp} />
        <StyledStamp type="yellow" src={YellowStamp} />
        <StyledStamp type="red" src={RedStamp} />
        <StyledStamp type="orange" src={OrangeStamp} />
      </StyledStampGrid>
    </StyledModalContainer>
  );
};
