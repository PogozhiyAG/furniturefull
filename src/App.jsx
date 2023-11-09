import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import catalogData from "./data/data"
import Basket from "./js/basket";
import './css/style.css'

const App = () => {
    const [entries, setEntries] = useState([]);

    const basket = new Basket(entries, setEntries);

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

    return <RouterProvider router={router} />;
};

export default App;