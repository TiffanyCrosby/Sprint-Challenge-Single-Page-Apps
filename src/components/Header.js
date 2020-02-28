import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navbar id="navbar">
        <NavLink exact activeClassName="activeLink" to={"/"}>Home</NavLink>
        <NavLink exact activeClassName="activeLink" to={"/characters"}>Characters</NavLink>
        <NavLink exact activeClassName="activeLink" to="/locations">Location</NavLink>
        <NavLink exact activeClassName="activeLink" to="/episodes">Episodes</NavLink>
      </Navbar>
    </header>
  );
}