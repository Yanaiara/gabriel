import { ContentList, List, ListItem, Item, Img } from "./styles";
import { svg } from '../../../assets';

export const NavBar = () => {
    return (
        <ContentList>
          <Img src={svg.logo} />
          <List>
            <ListItem><Item href="#">Como Funciona ?</Item></ListItem>
            <ListItem><Item href="#">Serviços</Item></ListItem>
            <ListItem><Item href="#">Depoimentos</Item></ListItem>
            <ListItem><Item href="#">Loja</Item></ListItem>
            <ListItem><Item href="#">Contato</Item></ListItem>
          </List>
        </ContentList>
    );
}