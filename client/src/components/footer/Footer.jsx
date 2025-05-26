
import { ScVk } from "@styled-icons/evil/ScVk";
import { ScInstagram } from "@styled-icons/evil/ScInstagram";
import { ScTelegram } from "@styled-icons/evil/ScTelegram";
import { ScYoutube } from "@styled-icons/evil/ScYoutube";
import { ScOdnoklassniki } from "@styled-icons/evil/ScOdnoklassniki";
import { Icon } from "../icon/Icon";
import { ContactInfo, Copyright, FooterContainer, FooterTop, SocialIcons } from "./style";



export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <ContactInfo>
          <a href="tel:+78463756463">+7 (846) 375-64-63</a>
          <a href="mailto:cis.mail@yandex.ru">cis.mail@yandex.ru</a>
          <p>г. Самара, ул. Революционная, 70А</p>
        </ContactInfo>

        <SocialIcons>
          <a href="#">
            <Icon
              icon={ScVk}
              size="50px"
              color="white"
              
            />
          </a>
          <a href="#">
            <Icon
              icon={ScInstagram}
              size="50px"
              color="white"
            />
          </a>
          <a href="#">
            <Icon
              icon={ScTelegram}
              size="50px"
              color="white"
            />
          </a>
        </SocialIcons>
      </FooterTop>
      <Copyright>© 2024 Центр инженерной сантехники. Все права защищены</Copyright>
    </FooterContainer>
  );
};
