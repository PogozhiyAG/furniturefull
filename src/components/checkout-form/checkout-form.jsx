import React from "react";
import utils from "../../utils";
import './checkout-form.css'

const CheckoutForm = ({basket}) => {
    const dummy = () => 1;

    return (    
        <form className="cart-form">
            <h3 className="cart-form__title"> Оформление заказа</h3>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" placeholder="Имя Фамилия"></input>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="tel"  placeholder="+ 7 904 000 80 80"></input>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" placeholder="Адрес Доставки"></input>
            <div className="cart-form__price-box">
                <span className="text__size_l">Итого: </span>
                <span className="text__size_lb">{utils.formatCurrency(basket.getTotalAmount())} руб.</span>
            </div>
            <input onChange={dummy} className="cart-form__button text__size_m" type="button" value="Оформить заказ" />
        </form>
    )
};

export default CheckoutForm;