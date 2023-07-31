// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { keys } from "./navigation";

// const ProtectedRoute = ({ component: Component }) => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate(keys.root);
//     }
//   }, [isAuthenticated, navigate]);

//   if (isAuthenticated) {
//     return <Component />;
//   }

//   return null; // Render null or a loading component while redirecting
// };

// export default ProtectedRoute;
