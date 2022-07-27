import { useParams } from "react-router-dom";

import useFetchCountry from "./hooks/useFetchCountry";
import MapContainer from "./MapContainer";

const Country = () => {
  const {countryCode} = useParams();
  
  const {country, isFetching, error} = useFetchCountry(countryCode);

  if (error) {
    return <div>{error}</div>;
  }

  if (isFetching || !country) {
    return <div>Loading country info...</div>;
  }

  return (
    <>
      <div>
        <img src={country.flags.png} alt={country.flag} />
        <div>Code: {country.cca2}</div>
        <div>Common name: {country.name.common}</div>
        <div>Official name: {country.name.official}</div>
        <div>Region: {country.region}</div>
        <div>Subregion: {country.subregion}</div>
        <div>Area: {country.area}</div>
        <div>Population: {country.population}</div>
        <div>
          Languages:
          {Object.entries(country.languages).map(([key, value]) => (
            <div key={value}>
              {key} {value}
            </div>
          ))}
        </div>
      </div>
      <MapContainer capitalCoordinates={country.capitalInfo.latlng} />
    </>
  );
}

export default Country;