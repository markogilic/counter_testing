import { useState } from 'react';
import ShowCount from './component/ShowCount';

const add = (num) => {
   return num + 1;
};

const subtract = (num) => {
   return num - 1;
};

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="frame">
         <h1>Test Counter</h1>
         <p title="counter">Count: {count}</p>
         <ShowCount count={count} />
         <div>
            <button onClick={() => setCount(add(count))}>Add</button>
            <button onClick={() => setCount(subtract(count))}>Subtract</button>
            <button onClick={() => setCount(0)}>Reset</button>
         </div>
      </div>
   );
}

export default App;
