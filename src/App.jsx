import Header from './components/Header';
import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowCEO from './components/ShowCEO';
import Location from './pages/Location';
import Search from './pages/Search';
import { ContextProvider } from './context/context';

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
         <ContextProvider>
            <BrowserRouter>
               <Header />
               <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                     <Route path="/" element={<ShowCEO />} />
                     <Route
                        path="/location/:city"
                        element={<Location employees={employees} roles={roles} />}
                     />
                     <Route
                        path="/search"
                        element={
                           <Search
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
         </ContextProvider>
      </div>
   );
}

export default App;
