import { useEffect, useState, useCallback } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [authTokens, setAuthTokens] = useState(() => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  });

  const handleAPIError = (error, defaultMessage = "Something went wrong!") => {
    const msg =
      error.response?.data
        ? Object.values(error.response.data).flat().join("\n")
        : defaultMessage;
    setErrorMsg(msg);
    return { success: false, message: msg };
  };

  const fetchUserProfile = useCallback(async () => {
    try {
      const res = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  }, [authTokens]);

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens, fetchUserProfile]);

  const loginUser = async (data) => {
    setErrorMsg("");
    try {
      const res = await apiClient.post("/auth/jwt/create/", data);
      setAuthTokens(res.data);
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      await fetchUserProfile();
      return { success: true };
    } catch (err) {
      setErrorMsg(err.response?.data?.detail || "Login failed");
      return { success: false };
    }
  };

  const registerUser = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", data);
      return {
        success: true,
        message:
          "Registration successful. Check your email to activate your account.",
      };
    } catch (err) {
      return handleAPIError(err, "Registration failed!");
    }
  };

  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      return { success: true };
    } catch (err) {
      return handleAPIError(err);
    }
  };

  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      return { success: true };
    } catch (err) {
      return handleAPIError(err);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("cartId");
  };

  return {
    user,
    errorMsg,
    authTokens,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changePassword,
  };
};

export default useAuth;
