import styled from 'styled-components';

export const TrainWithMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstDiv = styled.div`
  margin-bottom: 20px;
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  width: 30%;
  margin: 10px;
  text-align: center;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

export const ItemTextAux = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #555;
`;