import React from "react";

const CheckoutForm = ({basket}) => {
    const dummy = () => 1;

    return (    
        <form className="cart-form">
            <h3 className="cart-form__title"> Оформление заказа</h3>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" name="" id="" placeholder="Имя Фамилия"></input>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="tel" name="" id="" placeholder="+ 7 904 000 80 80"></input>
            <input onChange={dummy} className="cart-form__input text-input text__size_s" type="text" name="" id="" placeholder="Адрес Доставки"></input>
            <div className="cart-form__price-box">
                <span className="text__size_l">Итого: </span>
                <span className="text__size_lb">{basket.getTotalAmount()} руб.</span>
            </div>
            <input onChange={dummy} className="cart-form__button text__size_m" type="button" value="Оформить заказ" />
        </form>
    )
};

export default CheckoutForm;