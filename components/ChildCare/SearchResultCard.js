import React from "react";
import person from "../../public/assets/images/person.png";
import styles from "@/styles/SearchResultCard.module.css";
import Link from "next/link";

const SearchResultCard = ({ index, item }) => {
  // console.log("idx", index);
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.personContainer} w-50`}>
        <div>
          <img
            src={item?.image}
            alt=""
            className="rounded"
            width={149}
            height={149}
          />
        </div>
        <div>
          <h5>{item?.firstName + " " + item?.lastName}</h5>
          <span>{item?.role}</span>
          <p>{item?.aboutMe}</p>
        </div>
      </div>
      <div className={`w-50 ${styles.distanceContaier}`}>
        <div className="d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between">
          <div className="text-center">
            <h5>Distance</h5>
            <p>{Math.round(item?.measuredDistance)}km</p>
          </div>
          <div className={styles.buttonContainer}>
            <Link href={`/child-care/message/${item?._id}`}>
              <button className="btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
