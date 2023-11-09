import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import catalogData from "./data"
import Basket from "./basket";


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