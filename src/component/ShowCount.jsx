import React from 'react';

function ShowCount({ count }) {
   return (
      <>
         <h3>{count}</h3>
         <div className="conditional-frame">
            <p title="marko">{count > 3 ? <h3>Count is greater than 3</h3> : null}</p>
            <p title="marko2">{count > 6 ? <h3>Count is greater than 6</h3> : null}</p>
         </div>
      </>
   );
}

export default ShowCount;
