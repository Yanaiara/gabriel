import { AboutMeContainer, LeftContent, ProfileImage, RigthContent, Text, TextAux, Title, Info } from './styles';

export const AboutMe = () => {
    return (
      <AboutMeContainer>
        <LeftContent>
        {/* <ProfileImage src="sua_foto.jpg" alt="Minha Foto" width="391" height="406" /> */}
        <ProfileImage />
        </LeftContent>
        <RigthContent>
        <Info>SOBRE MIM</Info>
        <Title>Gabriel Rodrigues</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <TextAux>
            Ao escolher minha consultoria, você investe não apenas em um treino, mas em um programa integral respaldado
            por conhecimentos atualizados e práticas inovadoras. O tempo dedicado aos treinos é estrategicamente planejado 
            para garantir eficiência e eficácia na busca pelos seus objetivos. Junte-se a nós e experimente uma abordagem 
            de treinamento que vai além do convencional, impulsionando seus resultados de maneira sustentável e embasada 
            cientificamente.
        </TextAux>
        </RigthContent>
      </AboutMeContainer>
    );
  };
  
export default AboutMe;