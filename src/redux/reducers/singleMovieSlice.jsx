import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = "4e8b4e3bf56e1fd59a1905a7236a2d1d";

// Получение деталей фильма
const fetchMovieDetails = createAsyncThunk(
  "movie/fetchDetails",
  async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  }
);

// Получение актеров фильма
const fetchMovieCredits = createAsyncThunk(
  "movie/fetchCredits",
  async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie credits");
    }
    const data = await response.json();
    return data.cast;
  }
);

// Получение рекомендаций
const fetchMovieRecommendations = createAsyncThunk(
  "movie/fetchRecommendations",
  async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie recommendations");
    }
    const data = await response.json();
    return data.results;
  }
);

// Получение трейлера фильма
const fetchMovieTrailer = createAsyncThunk(
  "movie/fetchTrailer",
  async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie trailer");
    }
    const data = await response.json();
    const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
    return trailer ? trailer.key : null;
  }
);

const initialState = {
  movieDetails: null,
  credits: [],
  recommendations: [],
  trailerKey: null,
  isLoading: false,
  error: null,
};

const singleMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieCredits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.credits = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchMovieRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieTrailer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieTrailer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trailerKey = action.payload;
      })
      .addCase(fetchMovieTrailer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default singleMovieSlice.reducer;
export { fetchMovieDetails, fetchMovieCredits, fetchMovieRecommendations, fetchMovieTrailer };
