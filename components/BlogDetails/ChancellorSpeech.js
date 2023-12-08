import React from "react";
import styles from "@/styles/Blog.module.css";

const ChancellorSpeech = ({ blogDetails }) => {
  return (
    <div className={styles.chancellor_speech}>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: blogDetails?.content }} />
        {/* As our Chancellor said in her historic television speech on March 18,
          2020:
        </h4> */}
        {/* <div className={styles.speech}>
          <p>
            It depends on everyone. We are not doomed to passively accept the
            spread of the virus. We have a remedy against this: we have to keep
            our distance from each other out of consideration. The advice of the
            virologists is clear: no more handshakes, wash your hands thoroughly
            and often, keep a distance of at least one and a half meters to the
            next person and ideally hardly any contact with the very old,
            because they are particularly at risk.
          </p>{" "}
          <br />
          <p>
            I know how difficult it is what is being asked of us. We want to be
            close to each other, especially in times of need. We know affection
            as physical closeness or touch. Unfortunately, the opposite is true
            at the moment. And everyone really needs to understand that: At the
            moment, only distance is an expression of care.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ChancellorSpeech;
