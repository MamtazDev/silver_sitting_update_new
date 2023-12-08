import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const Dispute = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Online Dispute Resolution</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The European Commission provides a platform for online dispute
              resolution (OS). In the future, this will give consumers the
              opportunity to initially settle disputes in connection with their
              online order out of court. You can find the platform at{" "}
              <Link href="!#">http://ec.europa.eu/consumers/odr/</Link> . The
              email address of the consumer complaints provider is:
              <Link href="mailto:info@silversitting.com">
                info@silversitting.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispute;
