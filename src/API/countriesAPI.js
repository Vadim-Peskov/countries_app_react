import axios from "axios";

const instance = axios.create({
  baseURL: 'https://restcountries.com/v2/',
})

export const getAllCountries = (
  fields = 'flags,name,capital,region,subregion'
) => instance.get(`all?fields=${fields}`);

export const getOneCountry = (
  countryName, fields = 'flags,name,capital,region,subregion,languages,population'
) => instance.get(`name/${countryName}?fields=${fields}`);

