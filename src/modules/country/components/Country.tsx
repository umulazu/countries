import { useParams } from "react-router-dom";

import useFilteredQuery from "../hooks/useFilteredQuery";
import MapContainer from "./MapContainer";
import "./Country.css";

const Country = () => {
  const {countryCode} = useParams();
  
  const { isLoading, error, data: country } = useFilteredQuery(countryCode);

  if (error instanceof Error) {
    return <div className="country">{`${error}`}</div>;
  }

  if (isLoading) {
    return <div className="country">Loading...</div>;
  }

  if (!country) {
    return <div className="country">Nothing found!</div>;
  }

  return (
    <div className="country">
      <div className="country__info-container">
        <img src={country.flags.png} alt={country.flag} />
        <div className="country__info">
          <div><strong>Code:</strong> {country.cca2}</div>
          <div><strong>Common name: </strong> {country.name.common}</div>
          <div><strong>Official name: </strong> {country.name.official}</div>
          <div><strong>Region: </strong> {country.region}</div>
          <div><strong>Subregion: </strong> {country.subregion}</div>
          <div><strong>Area: </strong> {country.area}</div>
          <div><strong>Population: </strong> {country.population}</div>
          <div>
            <strong>Languages:</strong>
            {Object.entries(country.languages).map(([key, value]) => (
              <div key={value}>
                {key} {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="country__map-container">
        <MapContainer capitalCoordinates={country.capitalInfo.latlng} />
      </div>
    </div>
  );
}

export default Country;