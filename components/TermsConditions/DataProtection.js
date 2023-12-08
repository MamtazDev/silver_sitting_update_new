import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const DataProtection = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Data protection</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The personal data of the user or provider are collected, processed
              and used within the scope of the purposeful fulfillment of the
              online offer by SilverSitting Gigauri, Andrea and Monninger,
              Daniel and in accordance with the statutory provisions.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The personal data (e.g. name, e-mail address, address, payment
              data) from the user or provider will only be used by SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR to fulfill and process
              the contract.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The user or provider is entitled to receive information about the
              personal data stored by SilverSitting Gigauri, Andrea and
              Monninger, Daniel GbR free of charge.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              In addition, the user or provider has the right to correct
              incorrect data and to block and delete their personal data,
              provided there is no legal obligation to retain it. If the user or
              provider requests deletion of the data as part of an active
              membership, this request is equivalent to a termination. Data
              deletion takes place within 7 working days.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              With regard to data protection, SilverSitting Gigauri, Andrea and
              Monninger, Daniel GbR expressly refers to the separate declaration
              on <Link href="!#">data protection</Link> .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtection;
