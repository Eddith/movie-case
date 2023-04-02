import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  isLoading: false,
  getMoviResp: [],
  getMovieErr: false,
  getMoviDetailResp: [],
  getMovieDetailErr: false,
};

export const getMovie = createAsyncThunk(
  "movie/getMovie",

  async (name: string, thunkAPI) => {
    try {
      const resp = await axios.get(
        `http://www.omdbapi.com/?apikey=f02643e0&s=${name}`,
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);

export const getMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",

  async (id: string, thunkAPI) => {
    try {
      const resp = await axios.get(
        `http://www.omdbapi.com/?apikey=f02643e0&i=${id}`,
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    // getMovie
    [getMovie.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getMovie.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getMovieErr = false;
      state.getMoviResp = action.payload;
    },
    [getMovie.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getMovieErr = true;
    },

    // getMovieDetail
    [getMovieDetail.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getMovieDetail.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getMovieDetailErr = false;
      state.getMoviDetailResp = action.payload;
    },
    [getMovie.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getMovieDetailErr = true;
    },
  },
});

export default movieSlice.reducer;
