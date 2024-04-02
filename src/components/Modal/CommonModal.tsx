import { useRecoilValue } from 'recoil';
import { useCallback, useEffect } from 'react';
import { StyledBackground, StyledCardClip } from './CommonModal.style';
import CardClip from '../../assets/CardClip.png';
import { PublicModal } from './ModalType/PublicModal/PublicModal';
import { GoDrawModal } from './ModalType/GoDrawModal/GoDrawModal';
import { modalTypeState } from '../../recoil/modalType';
import { WeatherModal } from './ModalType/WeatherModal/WeatherModal';

interface CommonModalProps {
  onSelectWeather?: (weather: string) => void;
}

export const CommonModal = ({ onSelectWeather }: CommonModalProps) => {
  const MODAL_TYPES = {
    PUBLIC: 'PUBLIC',
    GODRAW: 'GODRAW',
    WEATHER: 'WEATHER',
    SHARE: 'SHARE',
  };

  const modalType = useRecoilValue(modalTypeState);

  const lockScroll = useCallback(() => {
    document.body.style.cssText = `
    overflow-y: hidden;
    `;
  }, []);

  useEffect(() => {
    if (modalType) {
      lockScroll();
    } else {
      document.body.style.cssText = '';
    }
  }, [modalType, lockScroll]);

  return (
    <StyledBackground>
      <StyledCardClip src={CardClip} />
      {modalType === MODAL_TYPES.PUBLIC && <PublicModal />}
      {modalType === MODAL_TYPES.GODRAW && <GoDrawModal />}
      {modalType === MODAL_TYPES.WEATHER && <WeatherModal onSelectWeather={onSelectWeather} />}
    </StyledBackground>
  );
};
