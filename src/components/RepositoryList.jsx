import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'


const repository = {
  name: "hugo",
  description: "Form in ReactNative",
  link: "https://sass-lang.com/documentation/syntax/structure"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de reporótios</h1>

      <ul>
        <RepositoryItem caixa={repository} />
        <RepositoryItem caixa={repository} />
        <RepositoryItem caixa={repository} />

      </ul>
    </section>
  );
}
