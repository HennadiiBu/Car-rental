import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdvert } from "../components/Api/Api";

export const requestAdverts = createAsyncThunk(
  "adverts/requestAdverts",
  async (_, thunkApi) => {
    try {
      const data = await fetchAdvert();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
