import { useEffect, useState } from "react";

import { CountryResponse } from "../types";

type UseFetchCountryResponse = {
  country?: CountryResponse;
  isFetching: boolean;
  error: string;
}

const useFetchCountry = (countryCode?: string): UseFetchCountryResponse => {
  const [country, setCountry] = useState<CountryResponse>(); 
  const [isFetching, setIsFetching] = useState(false); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchCountryByCode = async () => {
      try {
        setIsFetching(true);

        const filteredFields: (keyof CountryResponse)[] = [
          "cca2",
          "flag",
          "flags",
          "name",
          "region",
          "subregion",
          "area",
          "population",
          "languages",
          "capitalInfo"
        ];
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}?fields=${filteredFields}`
        );
        const countries = await response.json();

        setCountry(countries);
      } catch (e) {
        setError("Unable to get country info!");

        console.error(e);
      }

      setIsFetching(false);
    }

    fetchCountryByCode();
  }, [countryCode]);

  return {country, isFetching, error};
}

export default useFetchCountry;