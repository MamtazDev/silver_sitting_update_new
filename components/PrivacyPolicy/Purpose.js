import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Purpose of data collection and processing</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Personal data is data that relates to an identified or
              identifiable natural person. A natural person is identifiable if
              they can be identified directly or indirectly. This is the case
              with an attribution of data that enables identification by name,
              location data, online identifier, etc. or by unique physical,
              genetic, economic, etc. characteristics.
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Personal data is collected and processed as part of the use of the
              online offer on the digital platform silversitting.com of
              SilverSitting, Gigauri, Andrea and Monninger, Daniel GbR.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              "Processing" refers to any procedure carried out with or without
              the use of automated procedures or any process related to personal
              data and the collection, recording, organization, storage,
              adaptation or modification, retrieval, use, disclosure by
              transmission, distribution or any other form of making available,
              matching or linking, restriction, deletion or destruction.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The collection of personal data takes place on the one hand
              through the voluntary input of the user or provider (e.g. when
              registering, subscribing to the newsletter, filling out the
              contact form) and on the other hand through automatic collection
              by IT systems and refers to technical data (e.g. data the internet
              browser, operating system, time of the visit).
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The following personal data of the user or provider is requested
              during the registration process: Surname, first name, gender,
              postal code, place of residence, street and e-mail address.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              During the registration process, the user or provider is asked to
              enter the following data: e-mail address and password, in order to
              grant members access to the online offer via a log-in function.
              The legal basis is Art. 6 IS 1 lit a and b GDPR, the voluntary
              consent of the user or provider and the membership contract.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The data remains stored with the operator until the end of the
              contractual relationship between the user and the provider and is
              then deleted after the commercial and tax retention periods have
              expired.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              Non-registered or unregistered users of the silversitting.com
              digital platform can display providers as part of a search
              function by entering the following personal data: km information
              for a radius search based on where you are (address: place of
              residence or zip code or street are required input data).
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              In order for the user to be able to contact the provider, it is
              necessary for a successful registration with the above-mentioned
              personal data to have taken place.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              In order for a provider to be displayed in the search function and
              to be able to receive a contact request from the user, successful
              registration with the above-mentioned personal data is required.
              In order to ensure a successful search function, it is necessary
              for the provider's profile to be filled with this additional
              information in addition to the above data: uploading a photo,
              information on availability, other information on interests. The
              provider can change and delete this data independently at any
              time.
            </p>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              If the user or provider is successfully registered on
              silversitting.com, they agree that the personal data entered will
              be displayed to other logged-in members of the platform for
              contact purposes and that users can contact you using your shared
              contact data. The legal basis is Art. 6 IS 1 lit a GDPR.
            </p>
          </div>
          <div className="d-flex align-items-start gap-3">
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              If the user's membership or the provider's contract of use ends,
              their profile with all the data entered and uploaded files will be
              completely and irretrievably deleted. This does not apply to data,
              such as invoice data, which the operator is obliged to store, for
              example for tax reasons. After expiry of the statutory retention
              periods, this data will be permanently deleted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
