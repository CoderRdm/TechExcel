import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check JWT token from local storage

  return token ? <Outlet /> : <Navigate to="/login" />; // Redirect if not logged in
};

export default ProtectedRoute;
