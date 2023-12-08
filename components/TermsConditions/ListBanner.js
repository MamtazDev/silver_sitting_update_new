import React from "react";
import styles from "@/styles/Terms.module.css";

const ListBanner = () => {
  return (
    <div className={styles.listBanner}>
      <div className="container">
        <h2>
          General Terms and Conditions of SilverSitting Gigauri, Andrea and
          Monninger, Daniel GbR
        </h2>
        <div className={styles.listing}>
        <ul>
          <li>General</li>
          <li>Acceptable Use Policy</li>
          <li>Description and provision of services</li>
          <li>
            Conclusion of contract, membership of users and providers, prices
          </li>
          <li>Data protection</li>
          <li>Disclosure and Sharing of Data</li>
          <li>Declaration of the user or provider</li>
          <li>Responsibilities and obligations of the user or provider</li>
          <li>Liability for breaches of duty</li>
          <li>Involvement of Third Parties</li>
          <li>Final Provisions</li>
          <li>Online Dispute Resolution</li>
          <li>Copyright</li>
          <li>Right of withdrawal</li>
        </ul>
        </div>

      
      </div>
    </div>
  );
};

export default ListBanner;
