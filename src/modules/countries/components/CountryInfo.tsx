import { useNavigate } from "react-router-dom";

import "./CountryInfo.css";

type CountryInfoProps = {
  flagURL: string;
  altFlag: string;
  name: string;
  subregion: string;
  code: string;
};

const CountryInfo = ({flagURL, altFlag, name, subregion, code}: CountryInfoProps) => {
  const navigate = useNavigate();

  const navigateToCountry = () => {
    navigate(`/countries/${code}`);
  }

  return (
    <div className="country-info">
      <img className="country-info__flag" src={flagURL} alt={altFlag}></img>
      {name}, {subregion}
      <button className="country-info__more-info" onClick={navigateToCountry}>More Info</button>
    </div>
  );
}

export default CountryInfo;