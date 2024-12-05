// import React from "react";
// import Child from "./Example/Child";

// import { useState } from "react";
// // import Methods from './Example/Methods';
// import PropTypes from "prop-types";

// import First from "./Example/First";


//  class App extends React.Component{
//     render(){
//         return(
//             <>
//             <First name="sadhana" age={20} isStudent={false}/>
//             <First/>
            
//             </>
//         )
//     }
// }

// First.PropTypes={
//   name:PropTypes.string,
//   age:PropTypes.number,
//   isStudent:PropTypes.bool,
// }

// First.defaultProps ={
//   name: 'Guest',
//   age:0,
//   isStudent:true
// };
// export default App;


//......................................................................................................


// function App() {
//   const[user,setUser]=useState(
//     {
//       name:"",
//       email:""
//     }
//   )

//   const sendData=(user)=>{
//    setUser(user)
//   }
//   return (
//     <div>
// <Child sendData={sendData}/>
// <div>
//   <strong>{user.name}</strong>
//   <br></br>
//   <strong>{user.email}</strong>
// </div>
//     </div>
//   )
// }

// export default App

//..........................................................................................

//  export default class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:"react",
//       data: ""
//     }
//   }

//   receiveDataFromChild=(data)=>{
//     this.setState({data});
//   }

//   render(){
//     return(
//       <div>
//         <Child name={this.state.name} 
//         sendDataToParent={this.receiveDataFromChild}/>
//         <p>hello</p>
//         {
//         <div>Data from child:{this.state.data}</div>
//         }
//       </div>
//     )
//   }

// }

//...............................................................................................



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './components/loginform';
// // import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginForm />} />
//           {/* Add a Route for Sign Up page */}
//           <Route path="/signup" element={<h2>Sign Up Page</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import LoginForm from './components/loginform';
// import './components/login.css';

// function App() {
//   return (
//     <div className="App">
//       <LoginForm />
//     </div>
//   );
// }

// export default App;



import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}>
             
          </Route>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;