
import React from "react";
import { NavLink } from 'react-router-dom';




const Navbar = () => {
  return (
    <>
      
              <NavLink to='/'>Home</NavLink><br/>

              <NavLink to='about'>About</NavLink><br/>
              
              <NavLink to='contact'>Contact</NavLink>
            
    </>
  );
};

export default Navbar