import { useCallback, useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
    const [loading, setLoading] = useState(false);

    const createOrGetCart = useCallback(async () => {
        if (!user) return null; // No cart for unauthenticated users
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
    }, [cartId, user]);

    const addCartItems = useCallback(
        async (product_id, quantity) => {
            if (!user) return null;
            setLoading(true);
            try {
                let id = cartId;
                if (!id) {
                    const newCart = await createOrGetCart();
                    id = newCart?.id;
                }
                const response = await authApiClient.post(`/carts/${id}/items/`, { product_id, quantity });
                return response.data;
            } catch (error) {
                console.log("Error adding Items", error);
            } finally {
                setLoading(false);
            }
        },
        [cartId, createOrGetCart, user]
    );

    const updateCartItemQuantity = useCallback(
        async (itemId, quantity) => {
            if (!user) return;
            try {
                await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, { quantity });
            } catch (error) {
                console.log("Error updating cart items", error);
            }
        },
        [cartId, user]
    );

    const deleteCartItems = useCallback(
        async (itemId) => {
            if (!user) return;
            try {
                await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
            } catch (error) {
                console.log(error);
            }
        },
        [cartId, user]
    );

    useEffect(() => {
        if (user) {
            createOrGetCart();
        } else {
            setCart(null);
            setCartId(null);
            localStorage.removeItem("cartId");
        }
    }, [user, createOrGetCart]);

    return { cart, loading, cartId, createOrGetCart, addCartItems, updateCartItemQuantity, deleteCartItems };
};

export default useCart;
