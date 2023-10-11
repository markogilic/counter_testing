import { createContext, useState } from 'react';
import baseLink from '../api';

const someContext = createContext();

export const ContextProvider = ({ children }) => {
   const [employees, setEmployees] = useState([]);
   const [roles, setRoles] = useState([]);

   function fetchEmployees() {
      baseLink
         .get('/employees')
         .then((res) => setEmployees(res.data))
         .catch((err) => console.log(err));
   }

   function fetchRoles() {
      baseLink
         .get('/roles')
         .then((res) => setRoles(res.data))
         .catch((err) => console.log(err));
   }

   return (
      <someContext.Provider value={{ employees, roles, fetchEmployees, fetchRoles }}>
         {children}
      </someContext.Provider>
   );
};

export default someContext;
