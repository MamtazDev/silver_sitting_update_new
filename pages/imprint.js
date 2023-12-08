import React from "react";
import styles from "@/styles/imprint.module.css";
import Link from "next/link";

const imprint = () => {
  return (
    <div className="container">
      <div className={styles.imprint}>
        <h6>According to § 5 TMG</h6>
        <p>
          SilverSitting, Andrea and Daniel Monninger (GbR) <br />
          Monastery 15a <br />
          17213 Malchow
        </p>
        <h3>VAT ID: DE327967812</h3>
        <h6>Represented by the CEO:</h6>
        <p>
          Andrea Monninger <br />
          Daniel Monninger
        </p>
        <h6>Contact</h6>
        <Link href="mailto:info@silversitting.com">info@silversitting.com</Link>
      </div>
    </div>
  );
};

export default imprint;
