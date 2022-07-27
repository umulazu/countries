import { CountryResponse, FieldsToFetch } from "./types";

export const getCountries = async (fieldsToFetch: FieldsToFetch, searchQuery: string): Promise<CountryResponse[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/${searchQuery}?fields=${fieldsToFetch}`
  );

  if (!response.ok) {
    throw new Error('Unable to fetch countries!')
  }

  return response.json();
}