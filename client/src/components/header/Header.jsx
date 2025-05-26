import LOGO from "../../assets/logo-small.png";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  CenterSection,
  LogoImg,
  LinksBlock,
  LogoBlock
} from "./style";
import { ControlPanelMenu } from "./components/control-panel-menu/ControlPanelMenu";

export const Header = () => (
  <HeaderContainer>
    <CenterSection>
      <LogoBlock>
        <Link to="/">
          <LogoImg src={LOGO} alt="home" />
        </Link>
      </LogoBlock>

      <LinksBlock>
        <Link to="#">О компании</Link>
        <Link to="/products">Каталог</Link>
        <Link to="#">Оплата и доставка</Link>
        <Link to="#">Офисы продаж</Link>
      </LinksBlock>

      <ControlPanelMenu />
    </CenterSection>
  </HeaderContainer>
);