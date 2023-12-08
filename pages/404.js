import React from "react";
import styles from "@/styles/NotFound.module.css";
import ErrorImage from "../public/assets/images/404Error.png";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className={`container ${styles.mainContainer}`}>
      <img src={ErrorImage.src} alt="" />
      <h2>404</h2>
      <p>Sorry, We can't find the page you requested</p>
      <Link href="/">
        <button>Back to home page</button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
