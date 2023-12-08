import React from "react";
import family from "../../public/assets/family.png";
import styles from "@/styles/WhoAreYou.module.css";

const WhoWeAre = () => {
  return (
    <div className={styles.who_we_are}>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <img className="img-fluid w-100" src={family.src} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h3>Who we are</h3>
            <p style={{ marginBottom: "50px !important" }}>
              We are Andrea and Daniel, have a psychological and educational
              background and live in Malchow. We are motivated by bright
              children's eyes and the gratitude of parents when their children
              spend a great time with a great grandma or grandpa.
            </p>
            <h3>The origin of the idea</h3>
            <p style={{ marginBottom: "30px" }}>
              On a holiday together we were guests of David, 90 years old. David
              was an unbelievably kind-hearted person and still in great shape
              for his age. His wife had recently passed away and he cared for us
              as if he were his own grandchildren. We really enjoyed the time
              together. This experience, and the fact that we kept hearing from
              friends about bottlenecks in childcare, gave us the idea of
              ​​SilverSitting.
            </p>
            <p>
              Connecting generations, making children's hearts, seniors and
              parents happy and at the same time increasing the range of
              childcare in Germany - that's what drives us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
