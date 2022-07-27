import { getCountries } from "./countriesService";
import { FieldsToFetch } from "./types";
// todo: remove
export const fetchCountries = async (searchQuery: string) => {
  const fieldsToFetch: FieldsToFetch = [
    "cca2",
    "flag",
    "flags",
    "name",
    "subregion",
  ];

  return getCountries(fieldsToFetch, searchQuery);
}