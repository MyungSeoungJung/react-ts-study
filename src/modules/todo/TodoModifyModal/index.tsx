import { MutableRefObject, useRef } from "react";
import {
  ButtonContainer,
  Container,
  Wrapper,
} from "./styles";
import { Button } from "@/components/Button/styles";

interface TodoModifyModalProps {
  index: number;
  memo: string;
  onConfirm: (payload: {
    index: number;
    memo: string;
  }) => void;
  onCancel: () => void;
}

const TodoModifyModal = ({
  index,
  memo,
  onConfirm,
  onCancel,
}: TodoModifyModalProps) => {
  const inputRef =
    useRef() as MutableRefObject<HTMLInputElement>;

  const handleConfirm = () => {
    onConfirm({
      index,
      memo: inputRef.current.value,
    });
  };

  return (
    <Wrapper>
      <Container>
        <input
          defaultValue={memo}
          ref={inputRef}
        ></input>
        <ButtonContainer>
          <Button primary onClick={handleConfirm}>
            수정
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default TodoModifyModal;
