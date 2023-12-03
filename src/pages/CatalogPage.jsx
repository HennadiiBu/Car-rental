import React, { useEffect, useState } from "react";
import AdvertList from "../components/Catalog/AdvertList/AdvertList";
import Filter from "../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilter,
  getMake,
  getMileageMax,
  getMileageMin,
  getPrice,
} from "../redux/selectors";
import { getFilteredCars } from "../components/Catalog/helpers/getFilteredCars";

import adverts from "../advertsCars.json";
import { setFilter } from "../redux/filterReducer";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const [filterCars, setFilterCars] = useState([]);
  const [filtering, setFiltering] = useState(false);

  const make = useSelector(getMake);
  const price = useSelector(getPrice);
  const mileageMin = useSelector(getMileageMin);
  const mileageMax = useSelector(getMileageMax);

  useEffect(() => {
    if (filtering) {
      (async () => {
        const visibleCars = await getFilteredCars(adverts, filter);
        setFilterCars(visibleCars);
      })();
    }
  }, [filtering, filter, dispatch]);

  // const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);

  // useEffect(() => {
  //   dispatch(requestAdverts());
  // }, [dispatch]);

  const showFiltredAdverts = Array.isArray(filterCars) && filterCars.length > 0;

  const handleSearch = async (event) => {
    event.preventDefault();
    const newFilterQuery = {
      make: make || "",
      price: price || "500",
      mileageMin: mileageMin || 0,
      mileageMax: mileageMax || 999999,
    };
    dispatch(setFilter(newFilterQuery));
    setFiltering(true);
  };

  return (
    <main>
      <Filter handleSearch={handleSearch} />
      {filtering ? (
        filterCars.length === 0 ? (
          <p>Oops, nothing found here. Try changing your search parameters...</p>
        ) : (
          <AdvertList adverts={filterCars} />
        )
      ) : (
        <AdvertList adverts={adverts} />
      )}
    
    </main>
  );
};

export default CatalogPage;
