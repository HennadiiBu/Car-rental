import React from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../redux/selectors";

import FavoriteList from "../components/Catalog/Favorite/FavoriteList";

const FavoritePage = () => {
  const favoriteAdvertsCars = useSelector(getFavorites);

  const showAdverts =
    Array.isArray(favoriteAdvertsCars) && favoriteAdvertsCars.length > 0;

  return (
    <main>
      <h1>Your Favorite Cars</h1>
      {showAdverts ? (
        <FavoriteList adverts={favoriteAdvertsCars} />
      ) : (
        <div>No Favorite Adverts</div>
      )}
    </main>
  );
};

export default FavoritePage;
