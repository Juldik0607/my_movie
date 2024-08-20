import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = "4e8b4e3bf56e1fd59a1905a7236a2d1d";

// Получение информации об актере
const fetchActorDetails = createAsyncThunk(
  "actor/fetchDetails",
  async (actorId) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=en-US`);
    if (!response.ok) {
      throw new Error("Failed to fetch actor details");
    }
    return response.json();
  }
);

// Получение фильмов, в которых снимался актер
const fetchActorMovies = createAsyncThunk(
  "actor/fetchMovies",
  async (actorId) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}&language=en-US`);
    if (!response.ok) {
      throw new Error("Failed to fetch actor movies");
    }
    return response.json();
  }
);

const initialState = {
  actorDetails: null,
  actorMovies: [],
  isLoading: false,
  error: null,
};

const actorMoviesSlice = createSlice({
  name: "actor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActorDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchActorDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.actorDetails = action.payload;
      })
      .addCase(fetchActorDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchActorMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchActorMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.actorMovies = action.payload.cast;
      })
      .addCase(fetchActorMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default actorMoviesSlice.reducer;
export { fetchActorDetails, fetchActorMovies };
