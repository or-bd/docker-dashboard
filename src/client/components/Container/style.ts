import styled from 'styled-components';

export const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  max-width: 100%;
  flex-shrink: 0;
  flex-flow: column wrap;
  background-color: #191b1f;
  border: 1px solid #ccccdc12;
  border-radius: 3px;
  margin: 0 20px 20px 0;
  padding: 10px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 0 10px 0;
    flex-grow: 1;
  }
`;

export const Actions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  right: 10px;
  
  div {
    margin-left: 10px;
  }
`;

export const LogsButton = styled.div`
  background-color: #252a30;
  padding: 3px 7px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: bold;
  border: 1px solid rgba(204,204,220,0.15);
  cursor: pointer;
  transition: all .3s;
  color: #92949f;

  &:hover {
    background-color: rgba(204,204,220,0.15);
    border-color: #252a30;
  }
`;

export const Status = styled.div<{isUp: boolean}>`
  width: 10px;
  height: 10px;
  background-color: ${({ isUp }): string => isUp ? 'rgb(115, 191, 105)' : '#f0475b'};
  border-radius: 50%;
`;
