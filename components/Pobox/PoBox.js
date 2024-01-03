import React from "react";
import styles from "@/styles/Pobox.module.css";
import profile from "../../public/assets/images/pobox-profile.png";
import sms from "../../public/assets/icons/sms.png";
import opensms from "../../public/assets/icons/open-sms.png";
import Message from "./Message";

const PoBox = ({ data }) => {
  console.log(data, "meess");
  return (
    <div className="d-flex flex-column gap-4">
      {data.length > 0 &&
        data.map((item, idx) => (
          <Message
            key={idx}
            styles={styles}
            profile={profile}
            sms={sms}
            members={item?.members}
            conversationId={item?._id}
          />
        ))}

      {/* <div className={styles.pobox}>
        <div className="d-flex gap-3 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <img src={profile.src} alt="" />

            <div>
              <h6>Conversation with</h6>
              <p>Andrew</p>
            </div>
          </div>

          <img src={opensms.src} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default PoBox;
