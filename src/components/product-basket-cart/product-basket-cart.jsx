import React from "react";
import NumericMinMax from "../numeric-min-max/numeric-min-max";
import utils from "../../js/utils";
import './product-basket-cart.scss'

const ProductBasketCart = ({productEntry, basket, hideCountEditor}) => {
    const onCountChange = (count) => basket.set(productEntry.product, count);

    const onRemoveItemClickHandler = (event) => {
        basket.set(productEntry.product, 0);
        event.preventDefault();
    };

    return (
        <div className="cart-item">
            <img className="cart-item__product-image" src={require('../../img/product/' + productEntry.product.imageUrl)} alt={productEntry.product.name}></img>
            <div className="cart-item__box">
                <h3 className="text__size_lb">{productEntry.product.name}</h3>
                <p className="cart-item__product-desc text__size_s text__color_gray">{productEntry.product.description}</p>
                <p className="text__size_mb text__color_quite-dark">{utils.formatCurrency(productEntry.product.price)} руб.</p>
                <div className="cart-item__command-bar text__size_s">
                    <a href="#" className="text__underline">Избранные</a>
                    <a href="" onClick={onRemoveItemClickHandler} className="text__underline">Удалить</a>
                </div>
            </div>
            
            {!hideCountEditor &&
                <NumericMinMax min={1} max={productEntry.product.available} value={productEntry.quantity} onChange={onCountChange}/>
            }
        </div>
    );
}

export default ProductBasketCart;