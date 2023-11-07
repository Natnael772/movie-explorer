import React, { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
    // <Logo />
    // <Search />
    // <NumResults />
  );
}

export default NavBar;
