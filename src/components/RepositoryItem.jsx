export function RepositoryItem (props) {
  return(
    <li>
          <strong>{props.caixa?.name ?? 'Default'}</strong>
          <p>{props.caixa.description}</p>
          <a href={props.caixa.link}>
            Acessar reporótios
          </a>
        </li>
  )
}