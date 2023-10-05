import React from 'react';
import { useState, useRef } from 'react';

function PageTwo({ employees, roles, locations, empInLocation }) {
   const [search, setSearch] = useState('');
   const [role, setRole] = useState('');
   const [location, setLocation] = useState('');

   const roleRef = useRef();
   const locationRef = useRef();
   const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
   };

   const handleRole = (e) => {
      e.preventDefault();
      setRole(e.target.value);
   };
   const handleLocation = (e) => {
      e.preventDefault();
      setLocation(e.target.value);
   };
   const handleClear = (e) => {
      e.preventDefault();
      setSearch('');
      setRole('');
      setLocation('');
      roleRef.current.value = '';
      locationRef.current.value = '';
   };

   if (search.length > 0) {
      employees = employees.filter((i) => {
         return i.name.toLowerCase().match(search.toLowerCase());
      });
   }
   if (role.length > 0) {
      employees = employees.filter((i) => {
         return Number(i.role) - 1 === parseInt(role);
      });
   }

   if (location.length > 0) {
      employees = employees.filter((i) => {
         return Object.values(empInLocation[Number(location)])[0].includes(Number(i.id));
      });
   }

   return (
      <div className="page-two">
         <h3> Welcome to Search Page </h3>
         <form className="form">
            <input
               className="search"
               type="text"
               placeholder="Search"
               onChange={handleChange}
               value={search}
            />
            <select className="select" onChange={handleRole} ref={roleRef}>
               <option value=""> Role</option>
               {roles.map((role, idx) => (
                  <option key={idx} value={idx}>
                     {role}
                  </option>
               ))}
            </select>
            <select className="select" onChange={handleLocation} ref={locationRef}>
               <option value="">Location</option>
               {locations.map((location, idx) => (
                  <option key={idx} value={idx}>
                     {location}
                  </option>
               ))}
            </select>
            <button onClick={handleClear}>Clear Search</button>
         </form>
         <div className="table">
            {employees.map((employee) => (
               <div key={employee.id} className="table-cell">
                  <div className="name">{employee.name}</div>
                  <div className="role">{employee.status}</div>
               </div>
            ))}
            {employees.length === 0 && <div>No result</div>}
         </div>
      </div>
   );
}

export default PageTwo;
