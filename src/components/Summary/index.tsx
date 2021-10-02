import { Container } from "./styles";
import IcomeIG from "../../images/assets/income.svg";
import OutcomeImg from "../../images/assets/outcome.svg";
import TotalImg from "../../images/assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IcomeIG} alt="" />
        </header>
        <strong>R$ 2.500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="" />
        </header>
        <strong>- R$ 2.500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="" />
        </header>
        <strong>R$ 2.500,00</strong>
      </div>
    </Container>
  );
}
