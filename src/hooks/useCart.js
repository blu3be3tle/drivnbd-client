import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const [cart, setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
    const [loading, setLoading] = useState(false);

    const createOrGetCart = useCallback(async () => {
        setLoading(true);
        try {
            let response;
            if (cartId) {
                response = await authApiClient.get(`/carts/${cartId}/`);
            } else {
                response = await authApiClient.post("/carts/");
                localStorage.setItem("cartId", response.data.id);
                setCartId(response.data.id);
            }
            setCart(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [cartId]);

    const addCartItems = useCallback(
        async (product_id, quantity) => {
            setLoading(true);
            try {
                let id = cartId;
                if (!id) {
                    const newCart = await createOrGetCart();
                    id = newCart?.id;
                }
                const response = await authApiClient.post(`/carts/${id}/items/`, {
                    product_id,
                    quantity,
                });
                return response.data;
            } catch (error) {
                console.log("Error adding Items", error);
            } finally {
                setLoading(false);
            }
        },
        [cartId, createOrGetCart]
    );

    const updateCartItemQuantity = useCallback(
        async (itemId, quantity) => {
            try {
                await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
                    quantity,
                });
            } catch (error) {
                console.log("Error updating cart items", error);
            }
        },
        [cartId]
    );

    const deleteCartItems = useCallback(
        async (itemId) => {
            try {
                await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
            } catch (error) {
                console.log(error);
            }
        },
        [cartId]
    );

    useEffect(() => {
        createOrGetCart();
    }, [createOrGetCart]);

    return { cart, loading, cartId, createOrGetCart, addCartItems, updateCartItemQuantity, deleteCartItems };
};

export default useCart;
