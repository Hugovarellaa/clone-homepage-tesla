import Modal from "react-modal";
import { Container, ContentButtons, RadioBox } from "./styles";
import closeImg from "../../images/assets/close.svg";
import incomeImg from "../../images/assets/income.svg";
import outcomeImg from "../../images/assets/outcome.svg";
import { FormEvent, useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log(type, title, amount, category);
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastra transação</h2>
        <input
          placeholder="Títutlo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <ContentButtons>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="red"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="green"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </ContentButtons>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
