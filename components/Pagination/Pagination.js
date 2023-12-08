import React, { useState } from "react";
import activeArrow from "../../public/assets/icons/active-right-arrow.png";
import disabledArrow from "../../public/assets/icons/disabled-left-arrow.png";
import styles from "@/styles/Pagination.module.css";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.Pagination}>
      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        {" "}
        <img src={activeArrow.src} alt="" className={styles.activeLeftArrow} />
      </button>
      {pageNumbers.map((i) => (
        <div className={currentPage === i && styles.activePage}>{i}</div>
      ))}

      <button
        className="btn"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        <img src={activeArrow.src} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
