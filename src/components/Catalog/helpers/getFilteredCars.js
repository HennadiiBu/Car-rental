export const getFilteredCars = (adverts, filter) => {
  const pars = (str) => parseInt(str.replace(/\D/g, ""), 10);

  const filteredCars = adverts.filter(
    ({ make, rentalPrice, mileage }) =>
      make.toLowerCase().includes(filter.make.toLowerCase()) &&
      pars(rentalPrice) <= filter.price &&
      mileage > filter.mileageMin &&
      mileage < filter.mileageMax
  );

  return filteredCars;
};
