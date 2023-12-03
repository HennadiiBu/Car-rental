import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

import image from "../../assets/bkg.jpg";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome to Car Rental!</h1>
      <p className={css.text}>
        Discover convenience and adventure with our diverse range of
        well-maintained vehicles. Enjoy flexible rental options, affordable
        rates, and convenient locations. Our dedicated team ensures exceptional
        customer service, prioritizing your safety and comfort. Book with us for
        a hassle-free journey and unforgettable memories.
      </p>
      <NavLink to="/catalog" className={css.startButton}>
        Get started
      </NavLink>
      {/* <img src={image} alt="" className={css.image} /> */}
    </div>
  );
};

export default Home;
