import { FirstDiv, ItemContainer, ItemImage, ItemTextAux, ItemTitle, SecondDiv, TrainWithMeContainer } from "./styles";

export const TrainWithMe = () => {
    return (
      <TrainWithMeContainer>
        <FirstDiv>
          <p>Texto curto 1</p>
          <p>Texto curto 2</p>
        </FirstDiv>
        <SecondDiv>
          {[...Array(6)].map((_, index) => (
            <ItemContainer key={index}>
              <ItemImage src={`imagem_${index + 1}.jpg`} alt={`Imagem ${index + 1}`} />
              <ItemTitle>Título {index + 1}</ItemTitle>
              <ItemTextAux>Texto auxiliar {index + 1}</ItemTextAux>
            </ItemContainer>
          ))}
        </SecondDiv>
      </TrainWithMeContainer>
    );
  };
  
  export default TrainWithMe;