import { useRecoilValue } from 'recoil';
import { StyledBackground, StyledCardClip } from './CommonModal.style';
import CardClip from '../../assets/CardClip.png';
import { PublicModal } from './ModalType/PublicModal/PublicModal';
import { GoDrawModal } from './ModalType/GoDrawModal/GoDrawModal';
import { modalTypeState } from '../../recoil/modalType';

export const CommonModal = () => {
  const MODAL_TYPES = {
    PUBLIC: 'PUBLIC',
    GODRAW: 'GODRAW',
    WEATHER: 'WEATHER',
    SHARE: 'SHARE',
  };

  const modalType = useRecoilValue(modalTypeState);

  return (
    <StyledBackground>
      <StyledCardClip src={CardClip} />
      {modalType === MODAL_TYPES.PUBLIC && <PublicModal />}
      {modalType === MODAL_TYPES.GODRAW && <GoDrawModal />}
    </StyledBackground>
  );
};
