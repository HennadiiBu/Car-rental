import React, { useEffect, useState } from "react";
import css from "./CarMileage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/filterReducer";
import {
  getMake,
  getMileageMax,
  getMileageMin,
  getPrice,
} from "../../../redux/selectors";

const CarMileage = () => {
  const dispatch = useDispatch();

  const make = useSelector(getMake);
  const price = useSelector(getPrice);
  const mileageMin = useSelector(getMileageMin);
  const mileageMax = useSelector(getMileageMax);

  const [minMileage, setMinMileageMin] = useState(0);
  const [maxMileage, setMaxMileageMin] = useState(99999);

  useEffect(() => {
    dispatch(
      setFilter({
        make,
        price,
        mileageMin: minMileage,
        mileageMax: maxMileage,
      })
    );
  }, [dispatch, make, maxMileage, mileageMax, mileageMin, minMileage, price]);

  const handleInput = (event) => {
    if (event.target.name === "mileageMin") {
      setMinMileageMin(event.target.value);
    } else if (event.target.name === "mileageMax") {
      setMaxMileageMin(event.target.value);
    }
  };

  return (
    <div className={css.inputBox}>
        <p className={css.lableText}>Сar mileage / km</p>
      <input
        type="number"
        className={css.inputFrom}
        name="mileageMin"
        onInput={handleInput}
      />
        <input
        type="number"
        className={css.inputTo}
        name="mileageMax"
        onChange={handleInput}
      />
    </div>
  );
};

export default CarMileage;
