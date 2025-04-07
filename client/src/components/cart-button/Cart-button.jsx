
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { addProductToCart } from "../../action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { selectCart } from "../../selectors";

export const CartButton = ({ product, size = 24 }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const productId = product.id;

  const productInCart = useMemo(
    () => cart.find((item) => item.id === productId),
    [cart, productId]
  );

  const handleToCart = () => {
    const count = 1;
    dispatch(addProductToCart(productId, count));
  };

  return (
    <div onClick={handleToCart} style={{ cursor: "pointer" }}>
      {productInCart ? (
        <CheckCircleIcon style={{ color: "red", fontSize: `${size}px` }} />
      ) : (
        <ShoppingCartIcon style={{ color: "grey", fontSize: `${size}px` }} />
      )}
    </div>
  );
};
