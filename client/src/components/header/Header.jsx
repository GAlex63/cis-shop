import LOGO from "../../assets/logo-small.png";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  CenterSection,
  LogoImg,
  LinksBlock,
  LogoBlock,
} from "./style.js";
import { ControlPanel } from "./components/control-panel/Control-panel.jsx";

export const Header = () => (
  <HeaderContainer>
    <CenterSection>
      <LogoBlock>
        <Link to="/">
          <LogoImg src={LOGO} alt="home" />
        </Link>
      </LogoBlock>

      <LinksBlock>
        <a href="#" title="О компании">
          О компании
        </a>
        <a href="/products" title="Каталог">
          Каталог
        </a>
        <a href="#" title="Оплата и доставка">
          Оплата и доставка
        </a>
        <a href="#" title="Офисы продаж">
          Офисы продаж
        </a>
      </LinksBlock>
      <ControlPanel />
    </CenterSection>
  </HeaderContainer>
);
