import React from "react";

import { Routes, Route, Navigate, Outlet} from "react-router-dom";
import AdminDashboard from "../../pages/AdminDashboard/AdminDashboard";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useUser();
  const navigate=useNavigate()
  console.log(user.user.publicMetadata.role)
   const role = user.user.publicMetadata.role ? user.user.publicMetadata.role : "user";

  if (role === "admin") {
    return <Outlet />;
  } else {
    navigate('/')
  }
};

export default PrivateRoute;
