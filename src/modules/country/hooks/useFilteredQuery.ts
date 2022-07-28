import { useQuery } from "@tanstack/react-query";

import { getCountryByCode } from "../countryService";
import { FieldsToFetchCountry } from "../types";

const useFilteredQuery = (code?: string) => {
  const fieldsToFetch: FieldsToFetchCountry = [
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
  
  return useQuery(["country", code], () => code ? getCountryByCode(fieldsToFetch, code) : null);
}

export default useFilteredQuery;