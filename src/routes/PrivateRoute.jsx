import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user } = useAuthContext();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setChecking(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (checking && user === null) return <p>Loading...</p>;
    if (!checking && user === null) return <Navigate to="/login" replace />;
    return children;
};

export default PrivateRoute;