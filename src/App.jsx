import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import catalogData from "./data"
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import Basket from "./Basket";


const App = () => {
    const [basketItems, setBasketItems] = useState([]);

    const basket = new Basket(basketItems, setBasketItems);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <CatalogPage catalogData={catalogData} basket={basket} />,
        },
        {
            path: "cart",
            element: <CartPage basket={basket}/>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;