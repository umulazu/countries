import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../countriesService";

import { fetchCountries } from "../fetchCountries";
import { FieldsToFetch, SearchFieldNames } from "../types";

const useFilteredQuery = (searchField: SearchFieldNames, searchValue: string | undefined) => {
  const searchQueryMapper = {
    [SearchFieldNames.Name]: `${SearchFieldNames.Name}/${searchValue}`, 
    [SearchFieldNames.Code]: `${SearchFieldNames.Code}/${searchValue}`, 
    [SearchFieldNames.Subregion]: `${SearchFieldNames.Subregion}/${searchValue}`, 
  };

  const searchQuery = searchValue ? searchQueryMapper[searchField] : 'all';

  const fieldsToFetch: FieldsToFetch = [
    "cca2",
    "flag",
    "flags",
    "name",
    "subregion",
  ];
  
  return useQuery(["countries", searchQuery], () => getCountries(fieldsToFetch, searchQuery));
}

export default useFilteredQuery;