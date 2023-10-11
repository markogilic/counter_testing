import someContext from '../context/context';
import { useContext, useEffect } from 'react';

function showCEOfromEmployees(employees, roles) {
   return employees
      .filter(
         (employee) => employee.status === 'active' && roles.indexOf('CEO') === employee.role - 1
      )
      .map((filteredEmployee) => (
         <div key={filteredEmployee.id} className="table-cell">
            <div className="name">{filteredEmployee.name}</div>
            <div className="role">CEO</div>
         </div>
      ));
}

function ShowCEO() {
   const { fetchEmployees, fetchRoles, employees, roles } = useContext(someContext);
   useEffect(() => {
      fetchEmployees();
      fetchRoles();
   }, []);

   return <div className="table">{showCEOfromEmployees(employees, roles)}</div>;
}

export default ShowCEO;
