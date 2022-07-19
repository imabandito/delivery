import React, { useContext } from "react";
import { DishesContext } from "../context";

const ShoppingCart = () => {
  const dishesInCart = React.useContext(DishesContext);

  return (
    <div>
      {dishesInCart.map((dish) => (
        <div>{dish.name}</div>
      ))}
    </div>
  );
};

export default ShoppingCart;
