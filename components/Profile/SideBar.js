import React from "react";
import styles from "@/styles/Sidebar.module.css";
import poboxActive from "../../public/assets/icons/pobox.png";
import pobox from "../../public/assets/icons/poboxNotActive.png";
import profile from "../../public/assets/icons/profile.png";
import profileActive from "../../public/assets/icons/profileActive.png";
import settings from "../../public/assets/icons/settings.png";
import settingsActive from "../../public/assets/icons/settingsActive.png";
import password from "../../public/assets/icons/changepassword.png";
import passwordActive from "../../public/assets/icons/passwordActive.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const SideBar = () => {
  const pathName = usePathname();
  const { user } = useSelector((state) => state.register);

  return (
    <div className={styles.sidebar}>
      <ul>
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
        {user?.role === "admin" && (
          <>
            <li>
              <Link href="/blogs/add">
                <img src={password.src} alt="" /> Add Blog
              </Link>
            </li>
            <li className={pathName == "/profile/all-blogs" && styles.active}>
              <Link href="/profile/all-blogs">
                <img src={password.src} alt="" /> All Blogs
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
