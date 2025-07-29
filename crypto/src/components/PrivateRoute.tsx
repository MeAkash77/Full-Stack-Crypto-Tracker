import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig"; // Make sure this exports the Firebase Auth instance

// ✅ FIX: Define the props interface before using it
interface PrivateRouteProps {
  element: ReactNode;
}

// ✅ FIX: Use the interface correctly
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{element}</>;
};

export default PrivateRoute;
