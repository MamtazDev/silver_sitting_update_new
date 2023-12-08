import React from "react";
import styles from "@/styles/Sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const MobileBar = () => {
  const pathName = usePathname();
  const { user } = useSelector((state) => state.register);
  return (
    <div className={`${styles.MobileBarContainer} d-block d-lg-none `}>
      {/* <ul>
        <li className={pathName == "/profile/po-box" && styles.active}>
          <Link href="/profile/po-box">
            <img
              src={pathName == "/profile/po-box" ? poboxActive.src : pobox.src}
              alt=""
            />{" "}
            P.O. Box
          </Link>
        </li>
        <li className={pathName == "/profile" && styles.active}>
          {" "}
          <Link href="/profile">
            <img
              src={pathName == "/profile" ? profileActive.src : profile.src}
              alt=""
            />{" "}
            Profile
          </Link>
        </li>
        {user.role === "childcarer" && (
          <li className={pathName == "/profile/settings" && styles.active}>
            {" "}
            <Link href="/profile/settings">
              <img
                src={
                  pathName == "/profile/settings"
                    ? settingsActive.src
                    : settings.src
                }
                alt=""
              />{" "}
              Settings
            </Link>
          </li>
        )}
        <li className={pathName == "/profile/change-password" && styles.active}>
          {" "}
          <Link href="/profile/change-password">
            <img
              src={
                pathName == "/profile/change-password"
                  ? passwordActive.src
                  : password.src
              }
              alt=""
            />{" "}
            Change password
          </Link>
        </li>
      </ul> */}

      <ul className="p-0">
        <li className={pathName == "/profile/po-box" && styles.mobileActive}>
          <Link href="/profile/po-box">P.O. Box</Link>
        </li>
        <li className={pathName == "/profile" && styles.mobileActive}>
          <Link href="/profile">Profile</Link>
        </li>
        {user.role === "childcarer" && (
          <li
            className={pathName == "/profile/settings" && styles.mobileActive}
          >
            <Link href="/profile/settings">Settings</Link>
          </li>
        )}
        <li
          className={
            pathName == "/profile/change-password" && styles.mobileActive
          }
        >
          <Link href="/profile/change-password">Change password</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileBar;
