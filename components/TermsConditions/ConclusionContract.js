import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const ConclusionContract = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>
          Conclusion of contract, membership of users and providers, prices
        </h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The use of the online offer on silversitting.com is free of charge
              for providers and inquirers. Provider is whoever has registered as
              grandma or grandpa. The minimum age for registration is 55 years.
              Exceptions to this rule must be granted in writing by
              SilverSitting Gigauri, Andrea and Monninger, Daniel GbR.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              As soon as a provider has successfully filled his profile with all
              the necessary data as part of the menu-driven registration
              process, an automated confirmation of the successful transmission
              of the user data is sent to the provider by e-mail. Registration
              is only complete after a "double opt-in" [1] , the childcare offer
              has been created and the user contract with SilverSitting Gigauri,
              Andrea and Monninger, Daniel GbR has been successfully concluded.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">Users can use the platform free of charge.</p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The offer for use by the user to SilverSitting Gigauri, Andrea and
              Monninger, Daniel GbR is deemed to have been made if the user has
              completely filled out the registration form with his data,
              selected the option "I have read the terms and conditions and
              agree to them" and thus accepted the terms and conditions and then
              sent the registration form by clicking on the "Register now"
              button.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The user then receives an automated confirmation of the successful
              transmission of the user data by e-mail ("Welcome to
              SilverSitting").
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The contract is concluded when the offer is made by SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR by clicking on the
              "Register now" button.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              In addition, the user receives an automated e-mail about the
              activation.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The information that the user or provider provides when
              registering must be up-to-date and truthful. SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR is entitled to check the
              personal details of the user or provider using suitable official
              documents. If the GbR has reason to believe that the information
              is incorrect, the user will receive a reminder and will be blocked
              until the correction is made. If he does not correct his
              information within two weeks, there is a reason for termination.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The operator reserves the right to withhold certain content or
              only make it available to the user or provider for a fee, provided
              this does not jeopardize the purpose of the contract.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The term of the contract is not limited in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionContract;
