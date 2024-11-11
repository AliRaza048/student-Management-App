import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyAuth } from "../../utils/auth";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await verifyAuth();
      setIsAuthenticated(authStatus);
      if (!authStatus) {
        navigate("/signup");
      }
    };
    checkAuth();
  }, [navigate]);
  if (!isAuthenticated) {
    return <p>Loading</p>;
  }
  return children;
};

export default ProtectedRoute;
