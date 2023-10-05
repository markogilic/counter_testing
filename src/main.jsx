import React from 'react';
import ReactDOM from 'react-dom/client';
// import {RouterProvider} from "react-router";
// import {createBrowserRouter} from "react-router-dom";

import App from 'src/app.jsx';

import './index.css';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
   </React.StrictMode>
);
