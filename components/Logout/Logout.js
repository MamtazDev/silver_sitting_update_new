import React from "react";
import styles from "@/styles/Logout.module.css";
import logout from "../../public/assets/images/logout.png";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { userLoggedOut } from "@/features/register/registerSlice";
import { useRouter } from "next/router";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLoggOut = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("silverSittingAuth");
    Cookies.remove("silverSitting");
    router.push("/login");
  };
  return (
    <div className="container">
      <div className={styles.logout}>
        <div className="text-center">
          <img className=" img-fluid" src={logout.src} alt="" />
          <h4>Are you sure you want to Log Out?</h4>
          <div
            style={{ gap: "35px" }}
            className="d-flex justify-content-center"
          >
            <button className={styles.yes_btn} onClick={handleLoggOut}>
              Yes
            </button>

            <Link href="/">
              <button className={styles.no_btn}>No </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
