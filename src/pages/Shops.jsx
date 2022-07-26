import React, { useEffect, useState } from "react";
import FoodService from "../API/FoodService";
import DishesList from "../components/dishesList/DishesList";
import ShopsList from "../components/shopsList/ShopsList";
import classes from "../styles/Shops.module.css";

const Shops = ({ addDishesInCart }) => {
  const [shops, setShops] = useState([]);
  const [active, setActive] = useState("1");
  const arr = [];

  useEffect(() => {
    if (!localStorage.getItem("shops")) {
      getShopsWrapper();
    } else {
      setShops(JSON.parse(localStorage.getItem("shops")));
    }

    return () => {
      console.log("Shop unmounted");
      setShops([]);
    };
  }, []);
  console.log(shops);

  const getShopsWrapper = async () => {
    await getShops("1", "Big Burger", "0", "10");
    await getShops("2", "Small Burger", "11", "10");
    await getShops("3", "Tiny Burger", "21", "10");
    setShops(arr);
    addToLocalStorage("shops", arr);
  };

  const addToLocalStorage = (name, elem) => {
    console.log("getshops shops", elem);
    localStorage.setItem(name, JSON.stringify([...elem]));
    console.log(localStorage.getItem("shops"));
  };

  const getShops = async (id, name, start, limit) => {
    const response = await FoodService.getFood(start, limit);
    arr.push({ id: id, name: name, dishes: response.data.results });
    // setShops((prev) => [
    //   ...prev,
    //   { id: id, name: name, dishes: response.data.results },
    // ]);
  };

  return (
    <div className={classes.shopsContainer}>
      <ShopsList shops={shops} setActive={setActive} />
      <DishesList
        shops={shops}
        active={active}
        addDishesInCart={addDishesInCart}
      />
    </div>
  );
};

export default Shops;
