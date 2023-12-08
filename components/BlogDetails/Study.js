import React from "react";
import study from "../../public/assets/study.png";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";

const Study = () => {
  return (
    <div className={styles.study}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <h4>
              New{" "}
              <Link
                target="_blank"
                href="https://www.medrxiv.org/content/10.1101/2020.11.01.20222315v1"
              >
                Study
              </Link>{" "}
              with encouraging results
            </h4>
            <p>
              We all miss the community with friends and family members or the
              beautiful moments that you can experience during childcare. With
              all the caution that should be exercised (and outlined in the
              guide above), there is hope that childcare is possible with proper
              precautions:
            </p>
            <p>
              A new and not yet reviewed study from England suggests that
              "People who share the house with children have not had an
              increased risk of becoming seriously ill with Covid-19 or of dying
              from it Online science portal of the magazine "Spektrum der
              Wissenschaft", reports{" "}
              <Link
                target="_blank"
                href="https://www.spektrum.de/news/wer-mit-kleinen-kindern-zusammenlebt-steckt-sich-nicht-haeufiger-an/1790321"
              >
                here
              </Link>{" "}
              in a very interesting article.
            </p>
            <p>
              We at SilverSitting wish you a happy time with your loved ones and
              please: <span>Stay healthy!</span>
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img className="img-fluid w-100" src={study.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
