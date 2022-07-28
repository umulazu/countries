import { useState } from "react";

import { FormValues } from "../types";
import { DEFAULT_SEARCH_FIELD, DEFAULT_SEARCH_VALUE } from "../constants";
import CountrySearchForm from "./CountrySearchForm";
import CountryList from "./CountryList";
import "./Countries.css";

const Countries = () => {
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH_VALUE);

  const [searchField, setSearchField] = useState(DEFAULT_SEARCH_FIELD);

  const onSearchFormSubmit = ({searchValue, searchField}: FormValues) => {
    setSearchValue(searchValue);
    setSearchField(searchField);
  };

  return (
    <>
      <CountrySearchForm onSubmit={onSearchFormSubmit} />
      <div className="countries__country-list">
        <CountryList searchField={searchField} searchValue={searchValue} />
      </div>
    </>
  );
}

export default Countries;