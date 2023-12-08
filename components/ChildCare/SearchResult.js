import React, { useState } from "react";
import SearchResultCard from "./SearchResultCard";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import styles from "@/styles/SearchResultCard.module.css";

const SearchResult = ({ handleSearchAgain }) => {
  const { filterData } = useSelector((state) => state.childCarerFilter);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <div className={`${styles.buttonContainer} mt-4`}>
        <button
          className="btn"
          style={{ background: "#8b3888", color: "white" }}
          onClick={handleSearchAgain}
        >
          Search Again
        </button>
      </div>

      {filterData &&
        filterData.length > 0 &&
        filterData
          .slice(startIndex, endIndex)
          .map((item, idx) => (
            <SearchResultCard index={idx} key={idx} item={item} />
          ))}

      <div className="d-flex justify-content-center mt-5">
        {filterData && filterData.length > itemsPerPage && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResult;
