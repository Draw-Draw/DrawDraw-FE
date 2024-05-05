import { useRecoilValue } from 'recoil';
// import { useCallback, useEffect } from 'react';
import { StyledBackground, StyledCardClip } from './CommonModal.style';
import CardClip from '../../assets/CardClip.png';
import { PublicModal } from './ModalType/PublicModal/PublicModal';
import { GoDrawModal } from './ModalType/GoDrawModal/GoDrawModal';
import { modalTypeState } from '../../recoil/modalType';
import { WeatherModal } from './ModalType/WeatherModal/WeatherModal';
import { ShareModal } from './ModalType/ShareModal/ShareModal';
import { StampModal } from './ModalType/StampModal/StampModal';
import { CommentModal } from './ModalType/CommentModal/CommentModal';
import { SelectDiaryModal } from './ModalType/SelectDiary/SelectDiary';
import { WriteOrView } from './ModalType/WriteOrView/WriteOrView';

interface CommonModalProps {
  onSelectWeather?: (weather: string) => void;
  onCloseModal?: () => void;
  diaryId?: string | undefined;
  fetchComment?: () => void;
  diaryName?: string;
  diarybookId?: string | undefined;
}

export const CommonModal = ({
  onSelectWeather,
  onCloseModal,
  diaryId,
  fetchComment,
  diaryName,
  diarybookId,
}: CommonModalProps) => {
  const MODAL_TYPES = {
    PUBLIC: 'PUBLIC',
    GODRAW: 'GODRAW',
    WEATHER: 'WEATHER',
    SHARE: 'SHARE',
    STAMP: 'STAMP',
    COMMENT: 'COMMENT',
    SELECTDIARY: 'SELECTDIARY',
    WRITEORVIEW: 'WRITEORVIEW',
  };

  const modalType = useRecoilValue(modalTypeState);

  const handleBackgroundClick = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <StyledBackground onClick={handleBackgroundClick}>
      <StyledCardClip src={CardClip} onClick={(e) => e.stopPropagation()} />
      {modalType === MODAL_TYPES.PUBLIC && <PublicModal />}
      {modalType === MODAL_TYPES.GODRAW && <GoDrawModal />}
      {modalType === MODAL_TYPES.WEATHER && <WeatherModal onSelectWeather={onSelectWeather} />}
      {modalType === MODAL_TYPES.SHARE && (
        <ShareModal diarybookId={diarybookId} diaryId={diaryId} />
      )}
      {modalType === MODAL_TYPES.STAMP && <StampModal diaryId={diaryId} />}
      {modalType === MODAL_TYPES.COMMENT && (
        <CommentModal diaryId={diaryId} onCloseModal={onCloseModal} fetchComment={fetchComment} />
      )}
      {modalType === MODAL_TYPES.SELECTDIARY && <SelectDiaryModal onCloseModal={onCloseModal} />}
      {modalType === MODAL_TYPES.WRITEORVIEW && (
        <WriteOrView diaryName={diaryName} diarybookId={diarybookId} />
      )}
    </StyledBackground>
  );
};
