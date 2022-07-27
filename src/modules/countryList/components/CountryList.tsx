import { useEffect, useState } from "react";

import Country from "./CountryInfo";
import "./CountryList.css";

type CountryResponse = {
  name: {
    common: string;
  };
  subregion: string;
  flags: {
    png: string;
    svg: string;
  };
  flag: string;
  cca2: string;
};

const CountryList = () => {
  const [countries, setCountries] = useState<CountryResponse[]>([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const filteredFields: (keyof CountryResponse)[] = [
          "cca2",
          "flag",
          "flags",
          "name",
          "subregion",
        ];

        const response = await fetch(`https://restcountries.com/v3.1/all?fields=${filteredFields}`);
        const countries = await response.json();

        setCountries(countries);
      } catch (e) {
        console.error(e);
      }

    }

    fetchCountries();
  }, []);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul className="country-list">
        {countries.map((country) => (
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
    </>
  );
}

export default CountryList;