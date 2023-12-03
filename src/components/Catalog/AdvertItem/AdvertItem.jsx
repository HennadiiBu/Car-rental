import React, { useEffect, useState } from "react";

import css from "./AdvertItem.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Modal } from "../../Modal/Modal";
import RenralCarModal from "../../RenralCarModal/RenralCarModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/advertsFvoriteCarsReducer";
import { getFavorites } from "../../../redux/selectors";

const AdvertItem = ({ advert }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteAdverts = useSelector(getFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteAdverts?.some((favorite) => favorite.id === advert.id)) {
      setIsFavorite(true);
    }
  }, [favoriteAdverts, advert]);

  const country = advert.address.split(", ").slice(2, 3);
  const sity = advert.address.split(", ").slice(1, 2);
  const functionality = advert.functionalities[0]
    .split(" ")
    .slice(0, 3)
    .join(" ");

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
    setCurrentAdvert(advert);
  };

  const handleToFavorite = (e) => {
    setIsFavorite(!isFavorite);

    if (favoriteAdverts?.some((favorite) => favorite.id === advert.id)) {
      dispatch(removeFavorite(advert));
    } else {
      dispatch(addFavorite(advert));
    }
  };

  return (
    <>
      <li key={advert.id} className={css.advertItem}>
        <div className={css.advertImageContainer}>
          <img
            src={advert.img}
            alt={advert.description}
            className={css.advertImage}
          />
          {isFavorite ? (
            <button className={css.favoriteButton} onClick={handleToFavorite}>
              <FavoriteIcon className={css.favoriteIcon} />
            </button>
          ) : (
            <button className={css.favoriteButton} onClick={handleToFavorite}>
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
        <button className={css.advertButton} onClick={toggleSuccessModal}>
          Learn more
        </button>
      </li>
      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <RenralCarModal advert={currentAdvert} />
        </Modal>
      )}
    </>
  );
};

export default AdvertItem;
