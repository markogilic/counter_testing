import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import baseLinks from '../api';
import { filter } from '../utilitie/function';

function Location({ employees, roles }) {
   const { city } = useParams();
   const [cityList, setCityList] = useState([]);
   const [currentCity, setCurrentCity] = useState([]);
   useEffect(() => {
      baseLinks.get('/employeesInLocations').then((res) => {
         setCityList(res.data);
      });
   }, []);
   useEffect(() => {
      // cityList.map((item) => {
      //    if (Object.keys(item)[0].toLocaleLowerCase() === city.toLocaleLowerCase())
      //       setCurrentCity(Object.values(item));
      // });
      filter(cityList, city, setCurrentCity);
   }, [cityList, city]);

   return (
      <>
         <h1>Employees ho live in {city}</h1>
         <div className="table">
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            {employees
               .filter(
                  (employee) =>
                     employee.status === 'active' && currentCity[0]?.includes(employee.id)
               )
               .map((filteredEmployee) => (
                  <div key={filteredEmployee.id} className="table-cell">
                     <div className="name">{filteredEmployee.name}</div>
                     <div className="role">{roles[filteredEmployee.role - 1]}</div>
                  </div>
               ))}
            {/* </Suspense> */}
         </div>
      </>
   );
}

export default Location;
