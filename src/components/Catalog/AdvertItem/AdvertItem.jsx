import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../../redux/selectors";
import { requestAdverts } from "../../../redux/operations";

import css from "./AdvertItem.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import adverts from '../../../advertsCars.json'

const AdvertItem = () => {
  // const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);

  // useEffect(() => {
  //   dispatch(requestAdverts());
  // }, [dispatch]);


console.log(adverts)

  return adverts.map((advert) => {
    const country = advert.address.split(", ").slice(2, 3);
    const sity = advert.address.split(", ").slice(1, 2);
    const functionality = advert.functionalities[0]
      .split(" ")
      .slice(0, 3)
      .join(" ");

    return (
      <li key={advert.id} className={css.advertItem}>
        <div className={css.advertImageContainer}>
          <img
            src={advert.img}
            alt={advert.description}
            className={css.advertImage}
          />
          {true ? (
            <button className={css.favoriteButton}>
              <FavoriteIcon className={css.favoriteIcon} />
            </button>
          ) : (
            <button className={css.favoriteButton}>
              <FavoriteBorderIcon className={css.notFavoriteIcon} />
            </button>
          )}
        </div>
        <div className={css.advertTitleContainer}>
          <h2 className={css.advertTitle}>
            {advert.make}{" "}
            <span className={css.advertTitleAccent}>{advert.model}</span>,{" "}
            {advert.year}
          </h2>
          <h2 className={css.advertTitle}>{advert.rentalPrice}</h2>
        </div>
        <div className={css.descBox}>
          <p className={css.descText}>{sity}</p>
          <p className={css.descText}>{country}</p>
          <p className={css.descText}>{advert.rentalCompany}</p>
          <p className={css.descText}>{advert.type}</p>
          <p className={css.descText}>{advert.model}</p>
          <p className={css.descText}>{advert.id}</p>
          <p className={css.descText}>{functionality}</p>
        </div>
        <button className={css.advertButton}>Learn more</button>
      </li>
    );
  });
};

export default AdvertItem;
