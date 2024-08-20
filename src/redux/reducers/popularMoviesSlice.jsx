import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "./apiUrls";

export const fetchPopular = createAsyncThunk("fetch popular", async () => {
  const response = await fetch(apiUrls.popular);
  const data = await response.json();
  return data.results;
});

const initialState = {
  popularMovies: [],
  isLoading: false,
};

const popularMoviesSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopular.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default popularMoviesSlice.reducer;
