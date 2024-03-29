import { useEffect, useState } from 'react';
import EmptySketchBook from '../../assets/EmptySketchBook.png';
import {
  StyledContainer,
  StyledCover,
  StyledDiaryContainer,
  StyledDiaryTitleInput,
  StyledNameInput,
  StyledSchoolInput,
  StyledSelectBtn,
} from './CoverRegister.style';
import SelectBtn from '../../assets/buttons/SelectBtn.svg';
import DisabledSelectBtn from '../../assets/buttons/DisabledSelectBtn.svg';
import { useFormInput } from '../../hook/useFormInput';
import { CommonModal } from '../Modal/CommonModal';
import { useSetModalType } from '../../hook/useSetModalType';

export const CoverRegister = () => {
  const [inputTitleValue, handleInputTitleChange] = useFormInput('');
  const [inputSchoolValue, handleInputSchoolChange] = useFormInput('');
  const [inputNameValue, handleInputNameChange] = useFormInput('');
  const [modalOpen, setModalOpen] = useState(false);
  const setModalType = useSetModalType();

  useEffect(() => {
    setModalOpen(false);
    setModalType('PUBLIC');
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const validBtn =
    inputTitleValue.trim().length > 0 &&
    inputSchoolValue.trim().length > 0 &&
    inputNameValue.trim().length > 0;

  return (
    <StyledContainer>
      <StyledDiaryContainer>
        <StyledCover src={EmptySketchBook} />
        <StyledDiaryTitleInput
          value={inputTitleValue}
          onChange={handleInputTitleChange}
          placeholder="일기장의 이름을 지어줘"
        />
        <StyledSchoolInput
          value={inputSchoolValue}
          onChange={handleInputSchoolChange}
          placeholder="학교 적기"
        />
        <StyledNameInput
          value={inputNameValue}
          onChange={handleInputNameChange}
          placeholder="이름 적기"
        />
      </StyledDiaryContainer>
      <StyledSelectBtn
        src={validBtn ? SelectBtn : DisabledSelectBtn}
        valid={validBtn}
        onClick={handleOpenModal}
      />
      {modalOpen && <CommonModal />}
    </StyledContainer>
  );
};
