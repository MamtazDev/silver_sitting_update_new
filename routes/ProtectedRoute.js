import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
