function ShowCEO({ employees, roles }) {
   return (
      <div className="table">
         {employees
            .filter(
               (employee) =>
                  employee.status === 'active' && roles.indexOf('CEO') === employee.role - 1
            )
            .map((filteredEmployee) => (
               <div key={filteredEmployee.id} className="table-cell">
                  <div className="name">{filteredEmployee.name}</div>
                  <div className="role">CEO</div>
               </div>
            ))}
      </div>
   );
}

export default ShowCEO;
