import React from "react";
import styles from "@/styles/Known.module.css";
import known from "../../../public/assets/known.png";
import Link from "next/link";

const Known = () => {
  return (
    <div className={styles.known}>
      <div className="container">
        <p>Known from</p>
        <Link
          href={"https://www.deutsche-startups.de/tag/silversitting/"}
          target="_blank"
        >
          <img src={known.src} alt="known" />
        </Link>
      </div>
    </div>
  );
};

export default Known;
