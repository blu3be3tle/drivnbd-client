import { useCallback, useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState(null);
    const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
    const [loading, setLoading] = useState(false);

    const createOrGetCart = useCallback(async () => {
        if (!user) return null; // no cart for unauthenticated users
        setLoading(true);
        try {
            let response;
            if (cartId) {
                // GET by cartId or fallback to /carts/mine
                try {
                    response = await authApiClient.get(`/carts/${cartId}/`);
                } catch (err) {
                    // fallback if cartId is invalid or deleted
                    response = await authApiClient.get(`/carts/mine/`);
                    if (response?.data?.id) {
                        localStorage.setItem("cartId", response.data.id);
                        setCartId(response.data.id);
                    } console.log(err)
                }
            } else {
                // POST to create a new cart
                response = await authApiClient.post("/carts/");
                localStorage.setItem("cartId", response.data.id);
                setCartId(response.data.id);
            }
            setCart(response.data);
            return response.data;
        } catch (error) {
            console.log("Cart fetch/create error:", error);
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
                const response = await authApiClient.post(`/carts/${id}/items/`, {
                    product_id,
                    quantity,
                });
                // optionally refresh cart
                await createOrGetCart();
                return response.data;
            } catch (error) {
                console.log("Error adding items:", error);
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
                await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
                    quantity,
                });
                await createOrGetCart();
            } catch (error) {
                console.log("Error updating cart items:", error);
            }
        },
        [cartId, createOrGetCart, user]
    );

    const deleteCartItems = useCallback(
        async (itemId) => {
            if (!user) return;
            try {
                await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
                await createOrGetCart();
            } catch (error) {
                console.log("Error deleting cart items:", error);
            }
        },
        [cartId, createOrGetCart, user]
    );

    useEffect(() => {
        if (!user) {
            setCart(null);
            setCartId(null);
            localStorage.removeItem("cartId");
            return;
        }
        if (!loading && !cart) {
            createOrGetCart().catch((err) =>
                console.log("Failed to fetch/create cart:", err)
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return {
        cart,
        loading,
        cartId,
        createOrGetCart,
        addCartItems,
        updateCartItemQuantity,
        deleteCartItems,
    };
};

export default useCart;
