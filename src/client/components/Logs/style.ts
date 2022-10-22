import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 90%;
  border: 1px solid #191b1f;
  z-index: 2;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LogHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 16px 10px;
  background-color: #191b1f;
`;

export const LogStyle = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  padding: 10px;
  flex-flow: row wrap;
  background-color: black;
  
  span {
    font-weight: normal;
    line-height: 27px;
    color: silver;
    font-family: monospace,monospace;
  }
`;
