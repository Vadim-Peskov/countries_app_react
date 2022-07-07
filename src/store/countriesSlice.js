import { createSlice} from "@reduxjs/toolkit";
import { loadCountries, loadCountry } from "./countriesAsyncThunk";

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    status: null,
    errors: null,
    pageStatus: null,
    pageError: null,
    allCountries: [],
    countriesList: [],
    singleCountry: null,
    currentPage: 1,
    perPage: 12,
    theme: localStorage.getItem('appTheme') || 'light',
  },
  reducers: {
    setAllCountries(state, action) {
      state.allCountries = action.payload;
    },
    setCountriesList(state, action) {
      state.countriesList = action.payload;
    },
    setSingleCountry(state, action) {
      state.singleCountry = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },

  extraReducers: {
    [loadCountries.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadCountries.fulfilled]: (state, action) => {
      state.status = 'resolved';
    },
    [loadCountries.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    
    [loadCountry.pending]: (state, action) => {
      state.pageStatus = 'loading';
      state.pageError = null;
    },
    [loadCountry.fulfilled]: (state, action) => {
      state.pageStatus = 'resolved';
    },
    [loadCountry.rejected]: (state, action) => {
      state.pageStatus = 'rejected';
      state.pageError = action.payload;
    },
  }
});

export const {
  setAllCountries, setCountriesList,
  setSingleCountry, setCurrentPage, setTheme
} = countriesSlice.actions;

export default countriesSlice.reducer;