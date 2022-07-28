import { CountryResponse, FieldsToFetchCountry } from "./types";

export const getCountryByCode = async (fieldsToFetch: FieldsToFetchCountry, code: string): Promise<CountryResponse> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=${fieldsToFetch}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Cannot find the country by ${code} code!`);
    }
    
    throw new Error("Unable to fetch country!");
  }

  return response.json();
}