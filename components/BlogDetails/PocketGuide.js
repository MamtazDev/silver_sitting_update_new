import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import guide from "../../public/assets/guide.png";

const PocketGuide = () => {
  return (
    <div className={styles.pocket_guide}>
      <div className="container">
        <p>
          The Federal Ministry of Health has published a pocket guide especially
          for senior citizens. You can read it{" "}
          <Link
            target="_blank"
            href="https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/5_Publikationen/Gesundheit/Broschueren/Taschenratgeber_fuer_Seniorinnen_und_Senioren.pdf"
          >
            here
          </Link>{" "}
        </p>
        <img className="img-fluid" src={guide.src} alt="" />
      </div>
    </div>
  );
};

export default PocketGuide;
