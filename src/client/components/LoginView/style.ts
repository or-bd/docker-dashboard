import styled from 'styled-components';

export const ViewStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #2d2d2d;
  padding: 10px;
  width: 320px;
`;

export const Input = styled.input`
  background: rgb(17, 18, 23);
  line-height: 1.5;
  font-size: 16px;
  color: rgb(204, 204, 220);
  border: 1px solid rgba(204, 204, 220, 0.15);
  position: relative;
  z-index: 0;
  flex-grow: 1;
  border-radius: 2px;
  padding: 20px;
  margin-bottom: 10px;

  :focus {
    outline: none !important;
  }
`;

export const Submit = styled.button`
  padding: 20px;
  background: rgb(85 86 87);
  color: #dfdbdb;
  border: none;
  cursor: pointer;
`;
