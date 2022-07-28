import { useQuery } from "@tanstack/react-query";

import { getCountries } from "../countriesService";
import { FieldsToFetchCountries, SearchFieldNames } from "../types";

const useFilteredQuery = (searchField: SearchFieldNames, searchValue?: string) => {
  const searchQueryMapper = {
    [SearchFieldNames.Name]: `${SearchFieldNames.Name}/${searchValue}`, 
    [SearchFieldNames.Code]: `${SearchFieldNames.Code}/${searchValue}`, 
    [SearchFieldNames.Subregion]: `${SearchFieldNames.Subregion}/${searchValue}`, 
    [SearchFieldNames.All]: `${SearchFieldNames.All}`, 
  };

  const searchQuery = searchValue ? searchQueryMapper[searchField] : searchQueryMapper[SearchFieldNames.All];

  const fieldsToFetch: FieldsToFetchCountries = [
    "cca2",
    "flag",
    "flags",
    "name",
    "subregion",
  ];
  
  return useQuery(["countries", searchQuery], () => getCountries(fieldsToFetch, searchQuery));
}

export default useFilteredQuery;