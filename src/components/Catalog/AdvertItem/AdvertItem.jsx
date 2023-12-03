import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../../redux/selectors";
import { requestAdverts } from "../../../redux/operations";

import { nanoid } from "nanoid";

import css from "./AdvertItem.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import adverts from "../../../advertsCars.json";
import { Modal } from "../../Modal/Modal";
import RenralCarModal from "../../RenralCarModal/RenralCarModal";

const AdvertItem = () => {
  // const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);

  // useEffect(() => {
  //   dispatch(requestAdverts());
  // }, [dispatch]);

  return adverts.map((advert) => {
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

    return (
      <>
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
  });
};

export default AdvertItem;
