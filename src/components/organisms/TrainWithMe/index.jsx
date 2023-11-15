import { FirstDiv, ItemContainer, ItemImage, ItemTextAux, ItemTitle, SecondDiv, TrainWithMeContainer, Steps } from "./styles";
import { svg } from "../../../assets";

export const TrainWithMe = () => {

  const itemsData = [
    {
      id: 1,
      imageSrc: svg.digitalPayment,
      title: '1. Escolha o plano',
      textAux: '30, 90 ou 180 dias de acompanhamento. 1 planilha para cada 30 dias.',
    },
    {
      id: 2,
      imageSrc: svg.digitalPayment,
      title: '2. Faça o pagamento',
      textAux: 'Pague com cartão de crédito a vista ou parcele em até 6 vezes.',
    },
    {
      id: 3,
      imageSrc: svg.digitalPayment,
      title: '3. Preencha o questionário',
      textAux: 'Após a confirmação do pagamento você vai receber o questionário de avaliação física.',
    },
    {
      id: 4,
      imageSrc: svg.digitalPayment,
      title: '4. Aguarde a planilha',
      textAux: 'Em até 7 dias após o recebimento das suas respostas o seu treino estará pronto.',
    },
    {
      id: 5,
      imageSrc: svg.digitalPayment,
      title: '5. Conte com meu suporte',
      textAux: 'Estarei a sua disposição todos os dias da semana para tirar dúvidas.',
    }
  ];

  return (
    <TrainWithMeContainer>
      <FirstDiv>
        <Steps>Passo a passo</Steps>
        <ItemTextAux>PARA CONTRATAR</ItemTextAux>
      </FirstDiv>
      <SecondDiv>
        {itemsData.map((item) => (
          <ItemContainer key={item.id}>
            <ItemImage src={item.imageSrc} alt={`Imagem ${item.id}`} />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemTextAux>{item.textAux}</ItemTextAux>
          </ItemContainer>
        ))}
      </SecondDiv>
    </TrainWithMeContainer>
  );
};
  
  export default TrainWithMe;