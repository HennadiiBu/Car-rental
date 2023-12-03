import Select from "react-select";

import css from "./customSelect.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterReducer";
import {
  getMake,
  getMileageMax,
  getMileageMin,
  getPrice,
} from "../../redux/selectors";


export default function CustomSelect({ placeholder, minWidth, options, name }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const make = useSelector(getMake);
  const price = useSelector(getPrice);
  const mileageMin = useSelector(getMileageMin);
  const mileageMax = useSelector(getMileageMax);

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const pars = (str) => parseInt(str.replace(/\D/g, ""), 10);

  const optionsCategories = options.map((make) => {
    return {
      value: pars(make),
      label: capitalizeFirstLetter(make),
    };
  });

  useEffect(() => {
    if (name === "brand") {
      dispatch(
        setFilter({
          make: selectedOption?.value,
          price,
          mileageMin,
          mileageMax,
        })
      );
    } else if (name === "price") {
      dispatch(
        setFilter({
          make,
          price: selectedOption?.value,
          mileageMin,
          mileageMax,
        })
      );
    }
  }, [dispatch, make, mileageMax, mileageMin, name, price, selectedOption]);

  return (
    <div
      className="selector"
      style={{
        width: minWidth,
      }}
    >
      {name === "brand" ? (
        <p className={css.lableText}>Car brand</p>
      ) : (
        <p className={css.lableText}>Price/ 1 hour</p>
      )}

      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={optionsCategories}
        placeholder={placeholder}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#F7F7FB;",
            borderRadius: "12px",
            minWidth: "110px",
            borderColor: "#F7F7FB",
            boxShadow: "none",
            padding: "5px",
            textAlign: name === "brand" ? "left" : "right",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#F7F7FB;",
            color: "white",
          }),

          menuList: (base) => ({
            ...base,
            backgroundColor: "#F7F7FB;",
            borderColor: "#F7F7FB",
            borderRadius: "12px",
            padding: "14px 32px 14px 14px",
            gap: "10px",
            maxHeight: "272px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray",
              borderRadius: "8px",
            },
            color: "rgba(18, 20, 23, 0.20);",
            textAlign: "left",
          }),

          placeholder: (base) => ({
            ...base,
            color: "#121417;",
          }),
          indicatorContainer: (base) => ({
            ...base,
            color: "#121417;",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#121417;",
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: "none",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: "12px",
          colors: {
            ...theme.colors,
          },
        })}
      />
    </div>
  );
}
