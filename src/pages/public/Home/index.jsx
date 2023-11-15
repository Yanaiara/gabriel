import { ContainerHome, MainText, ContactButton, LeftContent, Subtitle, Button, RightContent } from './styles';

export const Home = () => {
    return (
        <ContainerHome>
          <LeftContent>
            <MainText>Resultados Definitivos</MainText>
            <Subtitle>Conheça a minha consultoria fitness online e tenha resultados surpreendentes com treinos curtos e inteligentes.</Subtitle>
            <Button onClick={() => console.log('Direcionar para planos')}>Ver Planos</Button>
          </LeftContent>
          {/* <RightContent>
            <ContactButton onClick={() => console.log('Direcionar para contatos')}>Contatos</ContactButton>
          </RightContent> */}
        </ContainerHome>
    );
};
