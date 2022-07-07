import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCountries, getOneCountry } from "../API/countriesAPI";
import { setAllCountries, setCountriesList, setSingleCountry } from "./countriesSlice";

export const loadCountries = createAsyncThunk(
  'countries/allCountriesList',

  async (_, {rejectWithValue, dispatch}) => {
    try {
      const res = await getAllCountries();
      
      if (!res.statusText === 'OK') {
        throw new Error('Server Error!');
      }

      let data = await res.data;
      data = data.map(i => {
        if (i.capital === 'Mariehamn') {
          return {...i, name: 'Aland Islands'};
        }
        else if (i.capital) {
          return i;
        }
        else {
          return {...i, capital: 'No official capital'}
        }
      });
      
      data.sort((a,b) => a.name > b.name ? 1 : -1)

      dispatch(setAllCountries(data));
      dispatch(setCountriesList(data));
    }

    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const loadCountry = createAsyncThunk(
  'countries/oneCountry',

  async (countryName, {rejectWithValue, dispatch}) => {
    try {
      const res = await getOneCountry(countryName);
      
      if (!res.statusText === 'OK') {
        throw new Error('Server Error!');
      }

      let data = await res.data[0];
      if (data.capital === 'Mariehamn') data.name = 'Aland Islands';
      if (!data.capital) data.capital = 'No official capital';

      dispatch(setSingleCountry(data));
    }

    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)