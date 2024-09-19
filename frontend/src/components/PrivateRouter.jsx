import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const { authUser } = useSelector((store) => store.user);
  return authUser ? <Outlet /> : <Navigate to="/login" />;
}
