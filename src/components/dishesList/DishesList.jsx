import React from "react";
import { useContext } from "react";
import classses from "./DishesList.module.css";

const DishesList = ({ shops, active, addDishesInCart }) => {
  return (
    <div className={classses.dishesListContainer}>
      {shops.map((shop) => {
        if (shop.id == active) {
          return shop.dishes.map((dish) => (
            <div className={classses.dish} key={dish.id}>
              <div className={classses.imgContainer}>
                <img
                  src={dish.thumbnail_url}
                  alt={"dish.thumbnail_alt_text"}
                ></img>
              </div>
              <div>{dish.name}</div>
              <button onClick={() => addDishesInCart(dish)}>Add to cart</button>
            </div>
          ));
        }
      })}
    </div>
  );
};

export default DishesList;
