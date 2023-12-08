import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const ServiceDescription = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>
          Service description and provision of the digital platform{" "}
          <Link href="https://www.silversitting.com/">SilverSitting.com</Link>{" "}
        </h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The subject of the service provided by SilverSitting Gigauri,
              Andrea and Monninger, Daniel GbR (operator) is the provision of
              the digital platform silversitting.com on which care seekers
              (users) and care providers (providers) can find and contact each
              other. The goal of both parties is the establishment of childcare.
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              On the other hand, the service provided by SilverSitting Gigauri,
              Andrea and Monninger, Daniel GbR does not include the placement of
              care seekers and care providers. Consequently, the operator
              assumes no guarantee and no liability that during the contract
              period (paid membership of the user or free membership of the
              provider) a successful contact mediation will come about.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Providers can register free of charge and use the digital platform
              to a limited extent.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The online offer of the digital platform silversitting.com is made
              available to users free of charge (further details in the
              following point).
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Silversitting.com may be used by legal entities or legal entities,
              subject to the limitations set out below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
