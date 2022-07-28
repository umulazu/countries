import useFilteredQuery from "../hooks/useFilteredQuery";
import { CountryResponse, FormValues } from "../types";
import CountryInfo from "./CountryInfo";
import "./CountryList.css";

const CountryList = ({searchField, searchValue}: FormValues) => {
  const { isLoading, error, data: countries } = useFilteredQuery(searchField, searchValue);

  if (error instanceof Error) {
    return <div>{`${error}`}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!countries) {
    return <div>Nothing found!</div>;
  }

  return (
    <ul className="country-list">
      {Array.isArray(countries) ? (
        countries.map((country: CountryResponse) => (
          <li key={country.cca2}>
            <CountryInfo
              flagURL={country.flags.png}
              altFlag={country.flag}
              name={country.name.common}
              subregion={country.subregion}
              code={country.cca2}
            />
          </li>
        ))
      ) : (
        <li key={countries.cca2}>
          <CountryInfo
            flagURL={countries.flags.png}
            altFlag={countries.flag}
            name={countries.name.common}
            subregion={countries.subregion}
            code={countries.cca2}
          />
        </li>
      )}
    </ul>
  );
}

export default CountryList;