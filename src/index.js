import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch

} from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter';
import NavBar from './components/NavBar';
import Newdata from './components/newdata';
import AllData from './components/allData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AllData/> */}
    {/* <Adddata/> */}
    {/* <Counter/> */}
    {/* <Detail/> */}
    <App/>
    {/* <Newdata/> */}
  </React.StrictMode>
  // <Router>
  //   <NavBar/>
  //   <div>
      
  //       {/* <Route path='/'> */}
          
  //       <Routes>
  //       <Route path="/" element={<Counter />} />
  //       <Route path="detail" element={<Detail />} />
  //     </Routes>

  //       {/* </Route> */}
  //       {/* <Route path='/detail'>
  //         <Detail />
  //       </Route> */}
    
  //   </div>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
