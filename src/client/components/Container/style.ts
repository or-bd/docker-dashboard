import styled from 'styled-components';

export const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  max-width: 100%;
  flex-shrink: 0;
  flex-flow: column wrap;
  background-color: darkgrey;
  margin: 10px;
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
  background-color: lightblue;
  padding: 5px 3px;
  border-radius: 6px;
  border: 1px solid blue;
  font-size: 12px;
  font-weight: bold;
`;

export const Status = styled.div<{isUp: boolean}>`
  width: 10px;
  height: 10px;
  background-color: ${({ isUp }): string => isUp ? 'green' : 'red'};
  border-radius: 50%;
`;

