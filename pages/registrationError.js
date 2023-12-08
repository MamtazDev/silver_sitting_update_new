import React from "react";
import styles from "@/styles/Register.module.css";

const RegistrationError = () => {
  return (
    <div className="container">
      <div className={styles.success} style={{ maxWidth: "60%" }}>
        <h6 className="text-danger">
          Unfortunately something went wrong with your registration
        </h6>
        <p style={{ maxWidth: "70%" }} className="mx-auto">
          If the problem persists, please don’t hesitate to contact
          <a href="info@silversitting.com">
            {" "}
            <u>info@silversitting.com</u>
          </a>{" "}
          If you have any problems.
        </p>
      </div>
    </div>
  );
};

export default RegistrationError;
