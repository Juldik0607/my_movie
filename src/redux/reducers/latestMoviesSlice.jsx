import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "./apiUrls";

// Асинхронный thunk для получения последних фильмов
export const fetchLatest = createAsyncThunk("latest/fetchLatest", async () => {
  const response = await fetch(apiUrls.latest);
  const data = await response.json();
  return data.results; // Убедитесь, что ваш API возвращает массив фильмов
});

const initialState = {
  latestMovies: [],
  isLoading: false,
};

const latestMoviesSlice = createSlice({
  name: "latestMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLatest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.latestMovies = action.payload;
      })
      .addCase(fetchLatest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default latestMoviesSlice.reducer;
