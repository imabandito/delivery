import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navBar}>
      <div className={classes.navLinks}>
        <Link to="/" className={classes.navLink}>
          Shop
        </Link>
        <Link to="/cart" className={classes.navLink}>
          Shopping Cart
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
