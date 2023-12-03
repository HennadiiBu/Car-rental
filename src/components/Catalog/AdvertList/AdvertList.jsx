import React, { useEffect } from "react";
import AdvertItem from "../AdvertItem/AdvertItem";

import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../../redux/selectors";
import { requestAdverts } from "../../../redux/operations";

import css from "./AdvertList.module.css";

import adverts from "../../../advertsCars.json";

const AdvertList = () => {
    // const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);

  // useEffect(() => {
  //   dispatch(requestAdverts());
  // }, [dispatch]);

  return (
    <section className={css.container}>
      <ul className={css.advertList}>
        <AdvertItem adverts={adverts}/>
      </ul>
    </section>
  );
};

export default AdvertList;
