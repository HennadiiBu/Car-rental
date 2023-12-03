import React from "react";
import css from "./RenralCarModal.module.css";
import { nanoid } from 'nanoid'

const RenralCarModal = ({ advert }) => {
  const country = advert.address.split(", ").slice(2, 3);
  const sity = advert.address.split(", ").slice(1, 2);

  const conditions = advert.rentalConditions.split("\n");

  return (
    <div className={css.modalContainer}>
      <img
        src={advert.img}
        alt={advert.description}
        className={css.modalImage}
      />
      <h2 className={css.modalTitle}>
        {advert.make}{" "}
        <span className={css.modalTitleAccent}>{advert.model}</span>,{" "}
        {advert.year}
      </h2>
      <div className={css.modalDescBox1}>
        <p className={css.modalDescText1}>{sity}</p>
        <p className={css.modalDescText1}>{country}</p>
        <p className={css.modalDescText1}>id: {advert.id}</p>
        <p className={css.modalDescText1}>Year: {advert.year}</p>
        <p className={css.modalDescText1}>Type: {advert.type}</p>
        <p className={css.modalDescText1}>
          Fuel Consumption: {advert.fuelConsumption}
        </p>
        <p className={css.modalDescText}>Engine Size: {advert.engineSize}</p>
      </div>
      <div>
        <p className={css.desc}>{advert.description}</p>
        <p className={css.accessoriesText}>Accessories and functionalities:</p>
        <ul className={css.modalDescBox}>
          {advert.accessories.map((elem) => {
            return (
              <li key={nanoid()} className={css.modalDescText}>
                {elem}
              </li>
            );
          })}
        </ul>
        <ul className={css.modalDescBox}>
          {advert.functionalities.map((elem) => {
            return (
              <li key={nanoid()} className={css.modalDescText}>
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className={css.titleConditions}>Rental Conditions:</p>
        <div className={css.conditionsBox}>
          <span className={css.modalConditions}>
            {conditions[0].split(/(\d+)/).map((part, index) =>
              isNaN(part) ? (
                <span key={index} className={css.nonNumeric}>
                  {part}
                </span>
              ) : (
                <span key={index} className={css.highlightedText}>
                  {part}
                </span>
              )
            )}
          </span>
          <span className={css.modalConditions}>{conditions[1]}</span>
          <span className={css.modalConditions}>{conditions[2]}</span>
          <span className={css.modalConditions}>
            Mileage:{" "}
            <span className={css.highlightedText}>{advert.mileage}</span>
          </span>
          <span className={css.modalConditions}>
            Price:{" "}
            <span className={css.highlightedText}>{advert.rentalPrice}</span>
          </span>
        </div>
      </div>
      <button className={css.modalButton}>Rental Car</button>
    </div>
  );
};

export default RenralCarModal;
