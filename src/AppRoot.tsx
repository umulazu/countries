import { Route, Routes } from 'react-router-dom';

import Country from './modules/country/components/Country';
import Countries from './modules/countries/components/Countries';
import NotFound from './modules/NotFound';

function AppRoot() {
  return (
    <Routes>
      <Route path="/countries" element={<Countries />} />
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
