import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9990;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
