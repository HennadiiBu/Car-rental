import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  advertsFavorites: [],
};

export const advertsFavoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.advertsFavorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.advertsFavorites = state.advertsFavorites.filter(
        (advert) => advert.id !== payload.id
      );
    },
  },
});

// Генератори екшенів
export const { addFavorite, removeFavorite } = advertsFavoriteSlice.actions;
// Редюсер слайсу
export const advertsFavoriteReducer = advertsFavoriteSlice.reducer;
