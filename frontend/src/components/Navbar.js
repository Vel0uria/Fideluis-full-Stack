import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "../styles";
import AuthService from "../services/auth";

function Navbar() {
  const authService = new AuthService();

  const handleLogout = () => {
    authService
      .logout()
      .then(res => {
        console.log(res.data.msg);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Nav>
        <NavLink to="/signup">SIGN UP</NavLink>|
        <NavLink to="/login">LOG IN</NavLink>|
        <NavLink to="/profile">PROFILE</NavLink>|<NavLink to="/">Home</NavLink>|
        <NavLink to="/" onClick={handleLogout}>
          LOG OUT
        </NavLink>
      </Nav>
    </div>
  );
}

export default Navbar;
