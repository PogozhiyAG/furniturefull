import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import catalogData from "./data/data"
import Basket from "./js/basket";
import './css/style.scss'

const App = () => {    
    const [basketEntries, setbasketEntries] = useState([]);

    const STORAGE_KEY_BASKET = 'basket';

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem(STORAGE_KEY_BASKET));
        if ( data !== null ) {            
            setbasketEntries(
                data.map(d => { return {
                    product: catalogData.find(p => p.id == d.id),
                    quantity: d.quantity
                }})
                .filter(e => e.product)
            );
        }
      }, []);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY_BASKET, JSON.stringify(basketEntries.map(e => { return { id: e.product.id, quantity: e.quantity }})));        
    }, [basketEntries]);

    const basket = new Basket(basketEntries, setbasketEntries);

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