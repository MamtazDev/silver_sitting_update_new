import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const Liability = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Liability of SilverSitting Gigauri, Andrea and Monninger, Daniel GbR</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The contract for the household-related service is concluded
              exclusively between the user and the provider. The operator only
              provides the digital platform for contact between the user and the
              provider and is not liable for the services of the participating
              users or participating providers. Accordingly, all matters
              relating to the relationship between user (care-seeker) and
              provider (care-provider), including without exception, services
              received by a care-seeker or payments due to care-providers, are
              due directly to the relevant party of user (care-seeker) or
              provider (care provider).
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The operator assumes no responsibility for the content and
              accuracy of the information in the registration and profile data
              of the user or provider, as well as other content provided by the
              user or provider for publication. SilverSitting Gigauri, Andrea
              and Monninger, Daniel GbR assumes no liability for any misuse of
              information.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">The operator has unlimited liability for:</p>
          </div>
          <ul className="ms-5">
            <li>Intent or gross negligence</li>
            <li>Absence of a guaranteed property</li>
            <li>Fraudulent concealment of a defect.</li>
          </ul>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The operator's liability is limited in the following: in the case
              of slight negligence, if there is a breach of duty, the
              fulfillment of which makes the proper execution of the contract
              possible in the first place, the breach of which jeopardizes the
              achievement of the purpose of the contract and compliance with
              which the user or provider can regularly rely on (cardinal
              obligation). Liability for slight negligence is limited to the
              damage that was foreseeable at the time the contract was concluded
              and the occurrence of which must typically be expected. Otherwise,
              the liability of the provider is excluded.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The provisions laid down here also apply to the vicarious agents
              of the operator. Liability according to the provisions of the
              Product Liability Act or other mandatory statutory provisions
              remains unaffected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liability;
