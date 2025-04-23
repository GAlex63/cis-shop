import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setCart, setUser } from "./action";
import {
  Authorization,
  CartPage,
  HomePage,
  Registration,
  ProductCardPage
} from "./pages";
import { OrderPage } from "./pages/CartPage/components/OrderPage/OrderPage";
import { CatalogPage } from "../src/pages/CatalogPage/CatalogPage";
import { Footer, Header, Modal } from "./components";
import GlobalStyle from "./GlobalStyles";
import { AppContainer, Page } from "./style";
import {
  AdminOrdersPage,
  AdminUsersPage,
  AdminCatalogPage,
} from "./pages/AdminPage";
import { ProductCartForm } from "./pages/ProductCardPage/component/product-form/product-form";
import { AddProductAdminPage } from "./pages/AdminPage/AdminCatalogPage/components/AddProductAdminPage/AddProductAdminPage";

export const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");
    const currentCartDataJSON = sessionStorage.getItem("cartData");
    if (!currentUserDataJSON) {
      return;
    }
    const currentUserData = JSON.parse(currentUserDataJSON);
    dispatch(
      setUser({
        ...currentUserData,
        roleId: Number(currentUserData.roleId),
      })
    );
    if (currentUserData.roleId === 0) {
      return;
    }

    if (!currentCartDataJSON) {
      return;
    }
    if (currentCartDataJSON) {
      const currentCartData = JSON.parse(currentCartDataJSON);
      dispatch(setCart(currentCartData));
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/products/:id" element={<ProductCardPage />} />
            <Route path="/products/:id/edit" element={<ProductCardPage />} />

            <Route path="/register" element={<Registration />} />

            <Route path="/users" element={<AdminUsersPage />} />
            <Route path="/orders" element={<AdminOrdersPage />} />
            <Route path="/catalog" element={<AdminCatalogPage />} />
            <Route path="/catalog/add" element={<AddProductAdminPage />} />

            <Route path="/catalog/:id" element={<ProductCartForm />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Page>
        <Footer />
        <Modal />
      </AppContainer>
    </>
  );
};
