import React from "react";
import styles from "@/styles/InstructionCard.module.css";

const InstructionCard = ({ instruction, number }) => {
  console.log(instruction.image);

  const imagePath = `${instruction?.image.src}`;
  const cleanedPath = imagePath.replace("/_next/static/media/", "");
  return (
    <>
      {/* <div className={styles.cardContainer}>
        <div className={styles.icons}>
          <img src={instruction?.image.src} alt="" />
        </div>
        <h6>{instruction?.title}</h6>
        <p>{instruction?.content}</p>
      </div> */}

      <div className={styles.mainCardContainer}>
        <div className={styles.countNumber}>
          <img src={instruction?.image.src} alt="" />
        </div>
        <div className={styles.allContentContainer}>
          <div className={styles.headline}>
            <div>{number}</div>
            <p>{instruction?.title}</p>
          </div>
          <p className={styles.contentText}>{instruction?.content}</p>
        </div>
      </div>
    </>
  );
};

export default InstructionCard;
