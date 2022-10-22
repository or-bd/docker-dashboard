import styled from 'styled-components';

export const ViewStyle = styled.div`
  width: 80%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  //background-color: wheat;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;
  }
`;
