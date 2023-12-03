export const getAdverts = (state) => state.adverts.adverts;

export const getFavorites = state => state.favorites.advertsFavorites;

export const getFilter = state => state.filter;
export const getMake = state => state.filter.make;
export const getPrice = state => state.filter.price;
export const getMileageMin = state => state.filter.mileageMin;
export const getMileageMax = state => state.filter.mileageMax;