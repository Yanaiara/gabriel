import styled from 'styled-components';

export const TrainWithMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #868d97;
  height: 100vh;
  padding-top: 20px;

  @media (max-width: 760px){
      height: 150vh;
  }
`;

export const FirstDiv = styled.div`
  margin-bottom: 20px;
  display: contents;
  margin-top: 20px;
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const ItemContainer = styled.div`
  width: 30%;
  margin: 20px;
  text-align: center;
`;

export const ItemImage = styled.img`
  max-width: 100px;
  height: auto;
`;

export const ItemTitle = styled.div`
  font-size: 30px;
  color: white;
  font-family: 'Teko', sans-serif;
  line-height: 1.4em;
  letter-spacing: 1px;

  @media (max-width: 760px){
    font-size: 22px;
  }
`;

export const ItemTextAux = styled.div`
  color: rgba(255,255,255,.73);
  font-weight: 400;
  line-height: 1.617em;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 760px){
    font-size: 16px;
  }
`;

export const Steps = styled.p`
  font-size: 30px;
  color: white;
  font-family: 'Teko', sans-serif;
  line-height: 1.4em;
  text-transform:uppercase;
  margin: 0;
`