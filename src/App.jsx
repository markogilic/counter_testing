import Header from './components/Header';
import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowCEO from './components/ShowCEO';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

import baseLink from './api';
function App() {
   const [employees, setEmployees] = useState([]);
   const [roles, setRoles] = useState([]);
   const [locations, setLocations] = useState([]);
   const [empInLocation, setEmpInLocation] = useState([]);
   useEffect(() => {
      baseLink.get('/employees').then((res) => setEmployees(res.data));
      baseLink.get('/roles').then((res) => setRoles(res.data));
      baseLink.get('/locations').then((res) => setLocations(res.data));
      baseLink.get('/employeesInLocations').then((res) => setEmpInLocation(res.data));
   }, []);

   return (
      <div>
         <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                  <Route path="/" element={<ShowCEO employees={employees} roles={roles} />} />
                  <Route
                     path="/page-one/:city"
                     element={<PageOne employees={employees} roles={roles} />}
                  />
                  <Route
                     path="/page-two"
                     element={
                        <PageTwo
                           employees={employees}
                           roles={roles}
                           locations={locations}
                           empInLocation={empInLocation}
                        />
                     }
                  />
               </Routes>
            </Suspense>
         </BrowserRouter>
      </div>
   );
}

export default App;
