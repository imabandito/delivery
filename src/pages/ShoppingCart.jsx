import React, { useContext } from "react";
import DishesInCart from "../components/dishesInCart/DishesInCart";
import SubmitForm from "../components/submitForm/SubmitForm";
import { DishesContext } from "../context";
import classes from "../styles/ShoppingCart.module.css";

const ShoppingCart = () => {
  const dishesInCart = React.useContext(DishesContext);
  //TODO useContext in dishList too
  return (
    <div className={classes.cartContainer}>
      <SubmitForm />
      <DishesInCart dishesInCart={dishesInCart} />
    </div>
  );
};

export default ShoppingCart;
