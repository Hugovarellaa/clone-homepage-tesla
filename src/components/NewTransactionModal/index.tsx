import Modal from "react-modal";
import { Container, ContentButtons } from "./styles";
import closeImg from "../../images/assets/close.svg";
import incomeImg from "../../images/assets/income.svg";
import outcomeImg from "../../images/assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img
          src={closeImg}
          alt="Close button"
          className="react-modal-close-button"
        />
      </button>
      <Container>
        <h2>Cadastra transação</h2>
        <input placeholder="Títutlo" />
        <input type="number" placeholder="Valor" />
        <ContentButtons>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </button>
        </ContentButtons>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
