import React, { useEffect, useState } from "react";

import { userLoggedIn } from "@/features/register/registerSlice";
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    //need to access cookies

    // const localAuth = localStorage.getItem("silverSittingAuth");
    const getCookie = (name) => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const cookieValue = getCookie("silverSitting");

    // console.log("cookieValue: ", userDataFromCookies.accessToken, userDataFromCookies.user)

    if (cookieValue) {
      // const auth = JSON.parse(localAuth);
      const urlDecodedString = decodeURIComponent(cookieValue);
      const userDataFromCookies = JSON.parse(urlDecodedString);
      if (userDataFromCookies?.accessToken && userDataFromCookies?.user) {
        dispatch(
          userLoggedIn({
            accessToken: userDataFromCookies.accessToken,
            user: userDataFromCookies.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};

export default useAuthCheck;
