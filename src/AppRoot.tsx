import { Route, Routes } from 'react-router-dom';

import Country from './modules/country/Country';
import CountryList from './modules/countryList/components/CountryList';
import NotFound from './modules/NotFound';

function AppRoot() {
  return (
    <Routes>
      <Route path="/countries" element={<CountryList />} />
      <Route path="/countries/:countryCode" element={<Country />} />
      <Route
        path="*"
        element={
          <NotFound />
        }
      />
    </Routes>
  );
}

export default AppRoot;
