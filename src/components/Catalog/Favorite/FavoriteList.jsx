import React from "react";
import css from "./FavoriteList.module.css";
import AdvertItem from "../AdvertItem/AdvertItem";
import { useSelector } from "react-redux";
import { getFavorites } from "../../../redux/selectors";

const FavoriteList = () => {
  const favoriteAdverts = useSelector(getFavorites);

  return (
    <section className={css.container}>
      <ul className={css.advertList}>
        {favoriteAdverts.map((favoriteAdvert) => (
          <AdvertItem advert={favoriteAdvert} />
        ))}
        {/* <AdvertItem adverts={favoriteAdverts} /> */}
      </ul>
    </section>
  );
};

export default FavoriteList;
