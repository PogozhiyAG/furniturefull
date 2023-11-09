import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/page-header/page-header";
import ProductBasketCart from "../../components/product-basket-cart";
import CheckoutForm from "../../components/checkout-form";
import './CartPage.css'

const CartPage = ({ basket }) => {
    const clearBasketClickHandler = () => basket.clear();

    const navigate = useNavigate();
    const goToCatalogClickHandler = () => navigate("/");

    return (
        <>
            <PageHeader basket={ basket }/>

            <section className="cart position__center position__gap_normal">
                <div className="cart-item-list">
                    <div className="cart-item-list__header">
                        <span>Товар</span>
                        <span>К-во</span>
                    </div>
                    
                    { basket.entries.map(entry => <ProductBasketCart key={entry.product.name} productEntry={entry} basket={basket}/>) }

                    <div className="cart-command-bar">
                        <button className="cart-command-bar__button" onClick={clearBasketClickHandler}>Очистить корзину</button>
                        <button className="cart-command-bar__button" onClick={goToCatalogClickHandler}>Продолжить покупки</button>
                    </div>
                </div>

               <CheckoutForm basket={basket}/>
            </section>
        </>
    )
};

export default CartPage;