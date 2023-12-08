import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const General = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <p style={{ marginBottom: "60px " }}>
          We look forward to welcoming you to silversitting.com and thank you
          for your interest in our company and our online offering. The
          protection of your privacy and your personal data is very important
          for the full and optimal use of our digital platform. For this reason,
          we take the utmost care and protect your data from unauthorized access
          while maintaining the highest security standards. We will use a more
          formal tone in the following provisions on all relevant privacy
          policies: <br />
          We will therefore call you, dear parents, “users” because you are
          looking for childcare. We will call you, dear senior citizen,
          "provider" because you would like to offer childcare. <br />
          The following information gives you information about how we,
          SilverSitting, Gigauri, Andrea and Monninger, Daniel GbR, guarantee
          data protection, what data is collected for what purpose and how it is
          processed. <br />
          Contact person and so-called person responsible for the processing of
          your personal data within the meaning of the data protection laws is:{" "}
          <br />
          SilverSitting, Gigauri, Andrea and Monninger, Daniel GbR <br />
          Monastery 15a <br />
          17213 Malchow <br />
          Germany
          <br />
          Link: <Link href="!#">Contact, Customer Service</Link>
          <br />
          Email: <Link href="mailto:info@silversitting.com"></Link>{" "}
          info@silversitting.com <br />
        </p>

        <h4>General information</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The legal basis of data protection is regulated in the EU General
              Data Protection Regulation (hereinafter GDPR). The operator deals
              with the protection of data and its security responsibly and
              complies with the legal provisions:
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              There is no sale or other unauthorized use of personal
              information.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              There is no unauthorized disclosure of personal data to third
              parties.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              A transfer to third parties only takes place:
            </p>
          </div>

          <ul>
            <li>
              If the user or provider has expressly given their consent in
              accordance with Article 6 Paragraph 1 Sentence 1 Letter a GDPR
            </li>
            <li>
              The transfer of data is permitted by law and is required for the
              fulfillment of contractual relationships and/or to carry out
              pre-contractual measures in accordance with Article 6 (1) sentence
              1 lit
            </li>
            <li>
              There is a legal obligation to pass on data in accordance with
              Article 6 Paragraph 1 Clause 1 Letter c GDPR
            </li>
            <li>
              The data transfer according to Art. 6 Para. 1 S. 1 lit. f DSGVO to
              protect a legitimate interest of the operator or a third party,
              unless the interests, fundamental rights and fundamental freedoms
              of the person concerned, which require the protection of personal
              data, prevail (e.g for wards)
            </li>
          </ul>
          <div className="d-flex align-items-start gap-3">
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              By successfully entering the personal data of the user or provider
              in the registration process, the user agrees that the operator may
              collect, process and use the data in accordance with the
              provisions listed here and to fulfill the contract.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
