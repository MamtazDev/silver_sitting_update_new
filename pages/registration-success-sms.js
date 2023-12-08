import React from "react";
import styles from "@/styles/Register.module.css";
import sms from "../public/assets/success-sms.png";
import Link from "next/link";

const SuccessSms = () => {
  return (
    <div className="container">
      <div className={styles.success} style={{ maxWidth: "60%" }}>
        <h6>
          This link has already been clicked, your user has already been
          successfully activated.
        </h6>
        <p>
          Please login{" "}
          <Link
            style={{
              textDecoration: "underline !important",
            }}
            href="/login"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SuccessSms;
