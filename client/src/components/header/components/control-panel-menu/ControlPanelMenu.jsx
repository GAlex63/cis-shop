import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUserLogin, selectUserRole } from "../../../../selectors";
import { checkAccess } from "../../../../utils";
import { logout } from "../../../../action";
import { ROLE } from "../../../../constans";

import { Icon } from "../../../icon/Icon";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import TocIcon from "@mui/icons-material/Toc";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  CartIcon,
  DropdownContainer,
  MenuButton,
  DropdownMenu,
  DropdownItem,
  UserNameDisplay
} from "./style";

export const ControlPanelMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const ref = useRef()

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  
  useEffect(() => {
        const handleClickOutside = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);


  return (
    <DropdownContainer ref={ref}>
      <CartIcon onClick={() => navigate("/cart")}>
      <Icon icon={ShoppingCartIcon} size='26px' />
      </CartIcon>
      <UserNameDisplay>{login}</UserNameDisplay>
      <MenuButton onClick={() => setOpen(!open)}>
        <Icon icon={MenuIcon} size="26px" />
      </MenuButton>

      {open && (
        <DropdownMenu>
          {roleId === ROLE.GUEST ? (
            <DropdownItem onClick={() => navigate("/login")}>
              <Icon icon={AccountCircleIcon} size="20px" /> <span>Войти</span>
            </DropdownItem>
          ) : (
            <>
              {isAdmin && (
                <>
                  <DropdownItem onClick={() => navigate("/catalog")}>
                    <Icon icon={TocIcon} size="20px" /> <span>Товары</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => navigate("/categories")}>
                    <Icon icon={TocIcon} size="20px" /> <span>Категории</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => navigate("/users")}>
                    <Icon icon={GroupIcon} size="20px" /> <span>Пользователи</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => navigate("/orders")}>
                    <Icon icon={SellIcon} size="20px" /> <span>Заказы</span>
                  </DropdownItem>
                </>
              )}
              <DropdownItem onClick={handleLogout}>
                <Icon icon={LogoutIcon} size="20px" /> <span>Выйти</span>
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};


// import { useState, useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { selectUserLogin, selectUserRole } from "../../../../selectors";
// import { checkAccess } from "../../../../utils";
// import { logout } from "../../../../action";
// import { ROLE } from "../../../../constans";

// import { Icon } from "../../../icon/Icon";
// import LogoutIcon from "@mui/icons-material/Logout";
// import MenuIcon from "@mui/icons-material/Menu";
// import TocIcon from "@mui/icons-material/Toc";
// import GroupIcon from "@mui/icons-material/Group";
// import SellIcon from "@mui/icons-material/Sell";

// import {
//   DropdownContainer,
//   DropdownMenu,
//   DropdownItem,
//   UserNameDisplay,
//   MenuButton,
// } from "./style";

// export const ControlPanelMenu = () => {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const roleId = useSelector(selectUserRole);
//   const login = useSelector(selectUserLogin);
//   const isAdmin = checkAccess([ROLE.ADMIN], roleId);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <DropdownContainer ref={ref}>
//       <UserNameDisplay>{login}</UserNameDisplay>
//       <MenuButton onClick={() => setOpen((prev) => !prev)} aria-label="Открыть меню">
//         <Icon icon={MenuIcon} size="26px" />
//       </MenuButton>
//       {open && (
//         <DropdownMenu>
//           {isAdmin && (
//             <>
//               <DropdownItem onClick={() => navigate("/catalog")}>
//                 <Icon icon={TocIcon} size="20px" /> Товары
//               </DropdownItem>
//               <DropdownItem onClick={() => navigate("/users")}>
//                 <Icon icon={GroupIcon} size="20px" /> Пользователи
//               </DropdownItem>
//               <DropdownItem onClick={() => navigate("/orders")}>
//                 <Icon icon={SellIcon} size="20px" /> Заказы
//               </DropdownItem>
//             </>
//           )}
//           <DropdownItem onClick={handleLogout}>
//             <Icon icon={LogoutIcon} size="20px" /> Выйти
//           </DropdownItem>
//         </DropdownMenu>
//       )}
//     </DropdownContainer>
//   );
// };


