import { useRecoilState } from 'recoil';
import { modalTypeState } from '../recoil/modalType';

export const useSetModalType = () => {
  const [, setModalType] = useRecoilState(modalTypeState);

  const setModal = (newType: string) => {
    setModalType(newType);
  };

  return setModal;
};
