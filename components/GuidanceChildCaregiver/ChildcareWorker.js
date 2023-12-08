import React from "react";
import styles from "@/styles/Guidance.module.css";
import laptop from "../../public/assets/icons/laptop.png";
import important from "../../public/assets/icons/important.png";
import thankful from "../../public/assets/icons/thankful.png";
import Link from "next/link";

const ChildcareWorker = () => {
  return (
    <div className={styles.Childcare_worker}>
      <div className="container">
        <h4>Then read here how to become a childcare worker.</h4>
        <div
          style={{ marginBottom: "20px" }}
          className="d-flex flex-column flex-md-row align-items-center gap-4 align-items-md-start "
        >
          <img className="img-fluid" src={laptop.src} alt="" />

          <div>
            <p>
              The first impression counts! As soon as you have{" "}
              <Link href="/register">registered</Link> as a childcare worker ,
              you can write a few words about yourself in your personal profile
              - your business card - and upload a friendly photo. When that's
              done, you're almost ready to go!
            </p>
            <p>
              Now the parents have the opportunity to find you for childcare via
              a filter-based search. You are also welcome to try the search
              yourself <Link href="/child-care">click here</Link> .
            </p>
          </div>
        </div>
        <div
          style={{ marginBottom: "20px" }}
          className="d-flex flex-column flex-md-row align-items-center gap-4 align-items-md-start "
        >
          <img className="img-fluid" src={important.src} alt="" />

          <div>
            <p>
              <span> Very important: </span>
              Only with the information in your profile can we ensure that there
              is a suitable support service for both sides. Because it is
              important to us at SilverSitting that parents, children and you as
              the childcare worker are satisfied! You get even better chances if
              you upload an extended certificate of good conduct in your
              settings. Don't worry, once we verify it, it will be deleted from
              our servers. This takes about 3 working days. ​ ​ ​
            </p>
            <p>
              If your profile has aroused the interest of parents, you may soon
              be able to look forward to a nice message from the parents. You
              can view all of your messages in your member area ("My area")
              after you have registered and logged in free of charge .
            </p>
            <p>
              As soon as parents send you a message via this platform, we will
              send you an email to let you know. If you have been written to and
              find out that it could be a good fit, it is best to exchange phone
              numbers quickly and arrange to get to know each other personally.
            </p>
            <p>
              We would like to point out again that neither you nor your parents
              will incur any costs when using this site. You also have the
              option of offering your services free of charge (you determine
              this later in your profile), but you can also agree on
              remuneration with the parents. About 9-15 euros per hour are
              usual, depending on the region and effort. If you have agreed
              payment, you will be paid directly by the parents. Payment does
              not take place via this platform.
            </p>
          </div>
        </div>
        <div
          style={{ marginBottom: "20px" }}
          className="d-flex flex-column flex-md-row align-items-center gap-4 align-items-md-start "
        >
          <img className="img-fluid" src={thankful.src} alt="" />

          <div>
            <p>
              <span>
                {" "}
                A child's laughter and a heartfelt thank you from the parents
                motivates you to become an active childcare worker? Then
                register with SilverSitting and bring a lot of joy to your
                everyday life, that of the children and the parents!{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildcareWorker;
