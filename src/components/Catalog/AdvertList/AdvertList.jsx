import React from "react";
import AdvertItem from "../AdvertItem/AdvertItem";

import css from "./AdvertList.module.css";

const AdvertList = () => {
  return (
    <section className={css.container}>
      <ul className={css.advertList}>
        <AdvertItem />
      </ul>
    </section>
  );
};

export default AdvertList;
