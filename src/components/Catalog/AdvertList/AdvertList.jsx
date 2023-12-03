import React from "react";
import AdvertItem from "../AdvertItem/AdvertItem";

import css from "./AdvertList.module.css";

const AdvertList = ({ adverts }) => {
  return (
    <section className={css.container}>
      <ul className={css.advertList}>
        {adverts.map((advert) => (
          <AdvertItem advert={advert} key={advert.id}/>
        ))}
      </ul>
    </section>
  );
};

export default AdvertList;
