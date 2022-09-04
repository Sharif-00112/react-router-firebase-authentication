import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
// import { useAuth } from "../hooks/Auth";

export function RequireAuth({ children }: { children: JSX.Element }) {

  let { user } = useAuth();
  let location = useLocation();

  if (!user.email) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}