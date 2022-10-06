import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const NavbarLogin = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/register" activeStyle>
            Sign Up
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavbarLogin;