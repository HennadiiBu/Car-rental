import { createSlice } from "@reduxjs/toolkit";
import { requestAdverts } from "./operations";

const initialState = {
  adverts: null,
  filter: "",
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(requestAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addCase(requestAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
