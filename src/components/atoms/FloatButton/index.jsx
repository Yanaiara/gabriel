import { FloatingButton, Img } from "./styles";
import { svg } from "../../../assets";

export const FloatingContactButton = () => {
    const handleContactClick = () => {
      console.log('Botão de Contatos clicado');
    };
  
    return (
      <FloatingButton onClick={handleContactClick}>
        <Img src={svg.iconMessage} />
      </FloatingButton>
    );
  };