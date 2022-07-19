import React from "react";
import classes from "./ShopsList.module.css";

const ShopsList = ({ shops, setActive }) => {
  return (
    <div className={classes.shopsListWrapper}>
      <h1 className={classes.shopsTitle}>Shops:</h1>
      <div className={classes.shopsList}>
        {shops.map((shop) => (
          <div
            className={classes.shop}
            key={shop.name}
            onClick={() => setActive(shop.id)}
          >
            {shop.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopsList;
