import { useForm } from "react-hook-form";

import { FormValues, SearchFieldNames } from "../types";
import { DEFAULT_SEARCH_FIELD, DEFAULT_SEARCH_VALUE } from "../constants";
import "./CountrySearchForm.css";

const DEFAULT_FORM_VALUES = {
  searchValue: DEFAULT_SEARCH_VALUE,
  searchField: DEFAULT_SEARCH_FIELD,
};

type CountrySearchFormProps = {
  onSubmit: ({searchValue, searchField}: FormValues) => void
}

const CountrySearchForm = ({onSubmit}: CountrySearchFormProps) => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const handleReset = () => {
    onSubmit(DEFAULT_FORM_VALUES);

    reset(DEFAULT_FORM_VALUES);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="country-search-form">
        <div className="country-search-form__search-value">
          <label htmlFor="searchValue">Search </label>
          <input
            placeholder="type something..."
            {...register("searchValue", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.searchValue?.type === "required" && (
            <div className="validation-error-text">
              Please type something in input
            </div>
          )}
          {errors.searchValue?.type === "maxLength" && (
            <div className="validation-error-text">
              Reached maximum length for the search value
            </div>
          )}
          {errors.searchValue?.type === "pattern" && (
            <div className="validation-error-text">
              Must contain alpha characters only
            </div>
          )}
        </div>

        <div className="country-search-form__search-field">
          <label>Search Field:</label>
          <input
            type="radio"
            {...register("searchField", { required: true })}
            value={SearchFieldNames.Name}
          />
          <label htmlFor={SearchFieldNames.Name}>{SearchFieldNames.Name}</label>
          <input
            type="radio"
            {...register("searchField")}
            value={SearchFieldNames.Subregion}
          />
          <label htmlFor={SearchFieldNames.Subregion}>
            {SearchFieldNames.Subregion}
          </label>
          <input
            type="radio"
            {...register("searchField")}
            value={SearchFieldNames.Code}
          />
          <label htmlFor={SearchFieldNames.Code}>{SearchFieldNames.Code}</label>
          
          {errors.searchField?.type === "required" && (
          <div className="validation-error-text">
            Please check one of radio-buttons
          </div>
        )}

        </div>
        
        <div className="country-search-form__buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
}

export default CountrySearchForm;