import LogoImg from "../../images/assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dtmoney" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
