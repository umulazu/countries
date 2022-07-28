import { CountryResponse, FieldsToFetchCountries } from "./types";

export const getCountries = async (fieldsToFetch: FieldsToFetchCountries, searchQuery: string): Promise<CountryResponse[] | CountryResponse> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/${searchQuery}?fields=${fieldsToFetch}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("There is no matches!");
    }
    
    throw new Error("Unable to fetch countries!");
  }

  return response.json();
}