import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const Disclosure = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Disclosure and Sharing of Data</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The user or provider is hereby informed in accordance with the
              provisions of the GDPR in conjunction with the Teleservices Data
              Protection Ordinance that SilverSitting Gigauri, Andrea and
              Monninger, Daniel GbR addresses in machine-readable form and for
              tasks resulting from the content of this offer, machine processed
              and published.
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
              By entering the personal data by the user or provider and sending
              it to the operator, the latter expressly agrees to the publication
              and disclosure of his personal data within the scope of the
              purposeful fulfillment of the online offer of SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR or by third parties
              commissioned by them.
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
              If a purposeful use of the personal data of the user or provider
              is ensured in the sense of the online offer, a transfer of this
              data to e.g. subsidiaries, holding companies and their
              subsidiaries is legal. This provision includes the transfer of
              personal data to third parties in the event of a purchase or sale
              of assets or the company as a whole or in parts if the online
              offer is continued under a different name, company or Internet
              address. This provision also applies if personal data is passed on
              to third-party service providers (authorities, lawyers, payment
              service providers, collection agencies, etc.) in order to pursue
              the business purpose. In this case, the operator must ensure{" "}
              <Link href="!#"> Privacy Policy</Link> ).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
