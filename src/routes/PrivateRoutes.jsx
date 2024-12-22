import Spinner from "@/components/loader/Spinner";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) return <Spinner />;
  if (!user) return <Navigate state={pathname} to={"/auth/signin"} />;
  return children;
}

export default PrivateRoutes;
