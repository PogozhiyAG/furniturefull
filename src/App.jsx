import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import catalogData from "./data/data"
import Basket from "./js/basket";
import './css/style.scss'

const Constants = {
    STORAGE_KEY_BASKET: 'basket'
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.setBasketEntries = this.setBasketEntries.bind(this);
        this.loadBasket = this.loadBasket.bind(this);
        this.saveBasket = this.saveBasket.bind(this);

        this.state = {
            basketEntries: this.loadBasket()
        };
    }

    
    loadBasket(){
        const data = JSON.parse(window.localStorage.getItem(Constants.STORAGE_KEY_BASKET));
        if ( data !== null ) {            
            return data.map(d => { return {
                product: catalogData.find(p => p.id === d.id),
                quantity: d.quantity
            }})
            .filter(e => e.product);
        }
        return [];
    }

    saveBasket(){
        window.localStorage.setItem(Constants.STORAGE_KEY_BASKET, JSON.stringify(this.state.basketEntries.map(e => ( { 
            id: e.product.id, 
            quantity: e.quantity 
        }))));
    }

    setBasketEntries(newValue){
        this.setState({
            basketEntries: newValue
        });      
    }

    componentDidUpdate(){
        this.saveBasket();
    }

    render(){
        const basket = new Basket(this.state.basketEntries, this.setBasketEntries);

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
    }
}

export default App;