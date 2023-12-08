import ProfileLayout from "@/layouts/Profile";
import React from "react";
import styles from "@/styles/ChangePassword.module.css";
import children from "../../../public/assets/images/child_change_password.png";

const ChangePassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.emptyContainer}></div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h3>Change password</h3>

          <div>
            <label>Enter your e-mail address</label>
            <input type="email" />
          </div>
          <div className="text-center">
            <button type="submit">Change</button>
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={children.src} alt="" />
      </div>
    </div>
  );
};

ChangePassword.PageLayout = ProfileLayout;
export default ChangePassword;
