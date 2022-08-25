import React from 'react';
import About from '../About';
import TextForm from '../TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Switch
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



export default function Main(props) {

  return (
    <>
        <Router>
            <Routes>
              {/* <Route path="/" exact element={<Welcome />} /> */}
              <Route exact path="/about" element={About} />
              <Route exact path="/home" element={<TextForm heading="Enter the text to analyze below" mode={props.mode} showAlert={props.showAlert}  />} />
            </Routes>
        </Router>
    </>
//     <>
//     <Router >
//     <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//       {/* <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/">
//           <TextForm heading="Enter the text to analyze below" mode={props.mode} showAlert={props.showAlert}  />
//         </Route>
//       </Switch> */}
//       <Routes>
//         <Route exact path="/about" element={<About />} />
//         <Route exact path="/home" element={<TextForm heading="Enter the text to analyze below" mode={props.mode} showAlert={props.showAlert}  />
// } />
//       </Routes>
//     </div>
//     </Router>
//     </>
  )
}
