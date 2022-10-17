import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./authState";

function ProtectedRoute({ children }) {
  let { user } = useAuth();
  let location = useLocation();
  if (user?.role === "admin") {
    return <Navigate to="/user/login" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
