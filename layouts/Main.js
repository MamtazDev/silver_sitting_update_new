import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useAuthCheck from "@/hooks/useAuthCheck";
import React from "react";

const Main = ({ children }) => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    ""
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
