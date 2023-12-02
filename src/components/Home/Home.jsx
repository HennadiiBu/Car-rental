import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

import image from "../../assets/bkg.jpg";

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome to Car Rental!</h1>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati,
        quod doloremque porro deserunt saepe alias voluptatibus laudantium cum
        molestiae, iste recusandae eveniet repellendus pariatur! Natus, expedita
        nobis. Nihil, quo.
      </p>
      <NavLink to="/catalog" className={css.startButton}>
        Get started
      </NavLink>
      <img src={image} alt="" className={css.image}/>
    </div>
  );
};

export default Home;
