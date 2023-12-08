import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const Declaration = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Declaration of the user or provider</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The user or provider declares that he or a member of his household
              has no criminal record for the following intentional crimes, in
              particular crimes against sexual self-determination (§ 174 ff.
              StGB), crimes against life (§ 211 ff. StGB) , crimes against
              bodily integrity (§ 223 ff. StGB), crimes against personal liberty
              (§ 232 ff. StGB). Furthermore, the user or provider declares that
              there are no previous convictions for theft and embezzlement (§
              242 ff. StGB), for robbery and extortion (§ 249 ff. StGB) or for
              drug abuse.
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
              The user or provider offering or seeking care declares that at no
              time has participation in the Scientology cult taken place or
              taken place. Furthermore, the user or provider declares that at no
              time have the teachings of L. Ron Hubbard been learned or
              practiced according to them and there is no intention of acquiring
              these teachings in the future.
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
              The provider declares that uploading the extended certificate of
              good conduct is entirely voluntary and that he agrees to the
              processing of the data in accordance with the principle of the
              GDPR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
