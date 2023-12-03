import React from "react";
import css from "./FilterBtn.module.css";

const FilterBtn = ({ handleSearch }) => {
  return (
    <div>
      <button onClick={handleSearch} className={css.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default FilterBtn;
