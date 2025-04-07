import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUserRole, selectUserLogin } from "../../../../selectors";
import { logout } from "../../../../action";
import { checkAccess } from "../../../../utils";

import { Icon } from "../../../Icon/Icon";
import { IconsBlock } from "../../style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import TocIcon from "@mui/icons-material/Toc";
import SellIcon from "@mui/icons-material/Sell";

import { ControlPanelContainer, RightAligned, UserName } from "./style";
import { ROLE } from "../../../../constans";

export const ControlPanel = () => {
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("userData");
    navigate("/");
  };

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);
  return (
    <ControlPanelContainer>
      
<RightAligned>
       
        <RightAligned>
          {isAdmin ? (
            <>
              <IconsBlock>
                <Icon
                  icon={TocIcon}
                  size="25px"
                  color="var(--item-color)"
                  margin="0 30px"
                />
                <Link to="/catalog">Товары</Link>
              </IconsBlock>
              <IconsBlock>
                <Icon
                  icon={GroupIcon}
                  size="25px"
                  color="var(--item-color)"
                  hoverColor="darkorange"
                />
                <Link to="/users"> Пользователи</Link>
              </IconsBlock>
              <IconsBlock>
                <Icon
                  icon={SellIcon}
                  size="25px"
                  color="var(--item-color)"
                  hoverColor="darkorange"
                />
                <Link to="/orders">Заказы</Link>
              </IconsBlock>
            </>
          ) : (
            <>
              <IconsBlock>
                <Icon
                  icon={ShoppingCartIcon}
                  size="25px"
                  color="var(--item-color)"
                  margin="0 30px"
                />
                <Link to="/cart">Корзина</Link>
              </IconsBlock>
            </>
          )}
        </RightAligned>
        {roleId === ROLE.GUEST ? (
          <>
            <IconsBlock>
              <Icon
                icon={AccountCircleIcon}
                size="25px"
                color="var(--item-color)"
                margin="0 30px"
              />
              <Link to="/login">Войти</Link>
            </IconsBlock>
          </>
        ) : (
          <>
            <UserName>{login}</UserName>
            <IconsBlock>
              <Icon
                icon={LogoutIcon}
                size="25px"
                color="var(--item-color)"
                margin="0 30px"
                onClick={onLogout}
              />
            </IconsBlock>
          </>
        )}
      </RightAligned>
    </ControlPanelContainer>
  );
};
