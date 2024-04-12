import { StyledDoneBtn, StyledInputComment, StyledModalContainer } from './CommentModal.style';
import DoneBtn from '../../../../assets/buttons/DoneBtn.svg';
import { useRecoilState } from 'recoil';
import { PostCommentState } from '../../../../recoil/PostCommentState';
import { postComment } from '../../../../apis/postComment';
import { CommentType } from '../../../../types/Comment.type';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  diaryId?: string;
}

export const CommentModal = ({ diaryId }: Props) => {
  const [commentState, setCommentState] = useRecoilState(PostCommentState);
  const [content, setContent] = useState('');

  const handleSubmitComment = async () => {
    setCommentState((prevPostCommentState: CommentType) => ({
      ...prevPostCommentState,
      content: content,
    }));
    try {
      const response = await postComment(diaryId, { ...commentState, content: content });
      console.log(response);
    } catch (error) {
      console.error('postDiaryBook 요청 중 오류 발생:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <StyledModalContainer>
      <StyledInputComment
        rows={2}
        cols={30}
        maxLength={50}
        value={content}
        onChange={handleInputChange}
      />
      <StyledDoneBtn src={DoneBtn} onClick={handleSubmitComment} />
    </StyledModalContainer>
  );
};
