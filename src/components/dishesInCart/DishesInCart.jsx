import React from "react";
import classes from "./DishesInCart.module.css";

const DishesInCart = ({ dishesInCart }) => {
  console.log(dishesInCart);
  return (
    <div className={classes.dishesWrapper}>
      {dishesInCart.map((dish) => (
        <div className={classes.dishWrapper} key={dish.id}>
          <img src={dish.thumbnail_url} alt={"dish.thumbnail_alt_text"}></img>
          <div className={classes.info}>
            <div className="name">{dish.name}</div>
            <div className="price">{dish.id} $</div>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishesInCart;
