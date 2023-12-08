import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const Withdrawal = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Right of withdrawal</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Consumers have the following right of withdrawal: <br />
              right of withdrawal
              <br />
              You have the right to withdraw from this contract within fourteen
              days without giving any reason. The cancellation period is
              fourteen days from the day the contract was concluded. <br />
              In order to exercise your right of withdrawal, you must send us,
              SilverSitting – Gigauri&Monninger GbR, Elkenbachstrasse 36, 60316
              Frankfurt, a clear declaration (e.g. a letter sent by post or an
              email to info@silversitting.com) about your decision to withdraw
              from this contract revoke inform You can use the attached sample
              revocation form for this, but this is not mandatory. To meet the
              cancellation deadline, it is sufficient for you to send the
              communication regarding your exercise of the right of cancellation
              before the cancellation period has expired.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Consequences of withdrawal: If you withdraw from this contract, we
              will owe you all payments that we have received from you,
              including delivery costs (with the exception of the additional
              costs resulting from the fact that you have chosen a different
              type of delivery than that offered by us , have chosen cheapest
              standard delivery) immediately and at the latest within fourteen
              days from the day on which we received the notification of your
              cancellation of this contract. For this repayment, we use the same
              means of payment that you used in the original transaction, unless
              something else was expressly agreed with you.
            </p>
          </div>
          <div
            style={{ marginBottom: "50px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Sample cancellation form: <br />
              (If you want to revoke the contract, please fill out this form and
              send it back to us.) <br />
              - <br />
              At <br />
              SilverSitting Gigauri, Andrea and Monninger, Daniel GbR <br />
              Monastery 15a <br />
              17213 Malchow <br />
              E-mail: info@silversitting.com <br />
              -<br />
              I/we (*) hereby revoke the contract concluded by me/us (*) for the
              purchase of the following goods (*)/ the provision of the
              following service (*) <br />
              - <br />
              Ordered on (*)/received on (*) <br />
              - <br />
              Name of consumer(s)
              <br />
              -<br />
              Address of consumer(s)
              <br />
              -<br />
              Signature of consumer(s) (only if notification is on paper)
              <br />
              -<br />
              Date
              <br />
              _____________
              <br />
              (*) Delete where not applicable.
              <br />
              End of revocation
            </p>
          </div>




          <h6>[1] describes a two-stage registration / confirmation process in which the user of online offers deposits his e-mail address in order to obtain services. In a second step, the order placed by the user is confirmed again in an e-mail from the service provider.</h6>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
