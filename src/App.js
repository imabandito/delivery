import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./pages/Shops";
import ShoppingCart from "./pages/ShoppingCart";
import NavBar from "./components/navbar/NavBar";
import { DishesContext } from "./context";
import React, { createContext, useContext, useState } from "react";

//const DishesContext = createContext();

function App() {
  const [dishesInCart, setDishesInCart] = useState([]);

  const addDishesInCart = (dish) => {
    setDishesInCart([...dishesInCart, dish]);
    console.log("dishes ", dishesInCart);
  };

  return (
    <DishesContext.Provider value={dishesInCart}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Shops addDishesInCart={addDishesInCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart addDishesInCart={addDishesInCart} />}
          />
        </Routes>
      </BrowserRouter>
    </DishesContext.Provider>
  );
}

export default App;
