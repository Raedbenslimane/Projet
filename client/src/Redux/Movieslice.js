import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddMovie = createAsyncThunk(
  "movie/AddMovie",
  async (newMovie, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/movie/", newMovie);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const DeleteMovie = createAsyncThunk(
  "movie/DeleteMovie",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(`/api/movie/${id}`, DeleteMovie);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);

export const updatemovie = createAsyncThunk(
  "movie/updatemovie",
  async (updatem, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.put(
        `/api/movie/${updatem._id}`,
        updatemovie
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);

export const getall = createAsyncThunk(
  "movie/getall",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/movie/");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);

const movieslice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
    movies: [],

    isLoading: false,
    msg: null,
    ERRORS: null,
  },
  extraReducers: {
    [AddMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [AddMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movie = action.payload.newMovie;
      state.msg = action.payload.msg;
    },
    [AddMovie.rejected]: (state, action) => {
      state.ERRORS = action.payload;
    },
    [getall.pending]: (state) => {
      state.isLoading = true;
    },
    [getall.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getall.rejected]: (state, action) => {
      state.ERRORS = action.payload;
    },
    [DeleteMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [DeleteMovie.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.movie = state.movie.filter(
        (movie) => movie._id !== payload.deletedMovie._id
      );
    },
    [DeleteMovie.rejected]: (state, { type, payload }) => {
      state.ERRORS = payload;
    },
    [updatemovie.pending]: (state) => {
      state.isLoading = true;
    },
    [updatemovie.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.movie = state.movie.map((movie) =>
        movie._id == payload.id ? { ...movie, ...payload } : movie
      );
    },
    [updatemovie.rejected]: (state, { type, payload }) => {
      state.ERRORS = payload;
    },
  },
});

export default movieslice.reducer;
