/* eslint-disable jsx-a11y/anchor-is-valid */
import useWrapperScroll from "../../Model/hooks/useWrapperScroll";
import { Container, Header, Footer, MenuBurger, Logo } from "./styles";
import { useTransform } from "framer-motion";

const UniqueOverlay: React.FC = () => {
  const { scrollProgress } = useWrapperScroll();

  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <MenuBurger />
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Feito com 💜</a>
          </li>
          <li>
            <a href="#">By Hugo Alves Varella</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
