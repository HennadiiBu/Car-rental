import React from "react";
import CustomSelect from "../customSelect/customSelect";
import CarMileage from "../Catalog/CarMileage/CarMileage";

import css from "./Filter.module.css";
import FilterBtn from "../FilterBtn/FilterBtn";

import makes from "../../makes.json";

const prices = ["10$", "20$", "30$", "40$", "50$", "60$", "70$", "80$"];

const Filter = ({ handleSearch }) => {
  return (
    <div className={css.firterContainer}>
      <CustomSelect
        minWidth={"224px"}
        name={"brand"}
        options={makes}
        placeholder={"Enter the text"}
      />
      <div className={css.selectBox}>
        <CustomSelect
          minWidth={"125px"}
          name={"price"}
          options={prices}
          placeholder={" $"}
        />
        <p className={css.text}>To</p>
      </div>
      <CarMileage />
      <FilterBtn handleSearch={handleSearch} />
    </div>
  );
};

export default Filter;
