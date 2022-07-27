import { CountryResponse, SearchFieldNames } from "../types";
import Country from "./CountryInfo";
import useFilteredQuery from "../hooks/useFilteredQuery";
import "./CountryList.css";
import { useState } from "react";

const CountryList = () => {
  // const [countries, setCountries] = useState<CountryResponse[]>([]);
  // const [query, setQuery] = useState('');
  
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const filteredFields: (keyof CountryResponse)[] = [
  //         "cca2",
  //         "flag",
  //         "flags",
  //         "name",
  //         "subregion",
  //       ];

  //       const response = await fetch(`https://restcountries.com/v3.1/all?fields=${filteredFields}`);
  //       const countries = await response.json();

  //       setCountries(countries);
  //     } catch (e) {
  //       console.error(e);
  //     }

  //   }

  //   fetchCountries();
  // }, []);

  // const { isLoading, isError, data: countries } = useQuery(["countries"], async () => {
  //   const filteredFields: (keyof CountryResponse)[] = [
  //     "cca2",
  //     "flag",
  //     "flags",
  //     "name",
  //     "subregion",
  //   ];

  //   const res = await fetch(
  //     `https://restcountries.com/v3.1/all?fields=${filteredFields}`
  //   );

  //   return await res.json();
  // });

  const [searchValue, setSearchValue] = useState();

  let searchField: SearchFieldNames = SearchFieldNames.Name;

  const { isLoading, isError, data: countries } = useFilteredQuery(searchField, searchValue);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (isError) {
    return <p>Error occurred!</p>;
  }

  if (!countries) {
    return <div>Nothing found!</div>;
  }

  return (
    <ul className="country-list">
      {countries.map((country: CountryResponse) => (
        <li key={country.cca2}>
          <Country
            flagURL={country.flags.png}
            altFlag={country.flag}
            name={country.name.common}
            subregion={country.subregion}
            code={country.cca2}
          />
        </li>
      ))}
    </ul>
  );

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={query}
  //       onChange={(event) => setQuery(event.target.value)}
  //     />
  //     <ul className="country-list">
  //       {countries.map((country) => (
  //         <li key={country.cca2}>
  //           <Country
  //             flagURL={country.flags.png}
  //             altFlag={country.flag}
  //             name={country.name.common}
  //             subregion={country.subregion}
  //             code={country.cca2}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
}

export default CountryList;