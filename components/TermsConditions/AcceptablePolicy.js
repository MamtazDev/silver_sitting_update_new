import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const AcceptablePolicy = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Acceptable Use Policy</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Commercial users (e.g. local or national companies) require a
              separate license as a user or provider, which must be granted in
              writing in advance by SilverSitting Gigauri, Andrea and Monninger,
              Daniel GbR and, if they act as users, a company license that is
              subject to a fee . For more information please contact the
              operator:{" "}
              <Link href="mailto:info@silversitting.com">
                info@silversitting.com
              </Link>
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              In the event of violations of this authorization requirement, the
              user undertakes to pay a compensation amount as set out below: for
              the first violation in the amount of 80 euros, in the case of
              repeated violations and each further case a contractual penalty in
              the amount of 500 euros. Payment is to be made to SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR, without prejudice to
              the rights under § 343 BGB. Further claims for damages remain
              unaffected.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              A user or provider may not transfer their account to third
              parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptablePolicy;
