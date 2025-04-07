import { useState } from "react";
import { ROLE } from "../constans";
import { useSelector } from "react-redux";
import { selectProduct, selectUserId } from "../selectors";
import { request } from "../utils/request";

export const useAddToCart = (userRole) => {
    const [cart, setCart] = useState([]);
    const userId = useSelector(selectUserId)
    const product = useSelector(selectProduct)

    const addToCart = async ({ count }) => {
        


        if (userRole === ROLE.GUEST) {
            const localCart = JSON.parse(localStorage.getItem('cart')) || [];
            const updatedCart = [...localCart, { product, count }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
        } else if (userRole === ROLE.USER) {
            try {
                const response = await request('/api/cart', "POST", ({productId, userId}))

                if (response.ok) {
                    const updatedCart = await response.json();
                    setCart(updatedCart);
                } else {
                    console.error('Ошибка при добавлении в корзину');
                }
            } catch (error) {
                console.error("Ошибка добавления в корзину", error);
            }
        }
    };

    return { cart, addToCart };
};