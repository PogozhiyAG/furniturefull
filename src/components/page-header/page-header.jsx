import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductBasketCart from '../product-basket-cart/product-basket-cart';
import utils from "../../js/utils";
import '../../css/style.scss'
import './page-header.scss'


const PageHeader = ({basket, useBasketPopup}) => {
    const [showPopup, setPopupContent] = useState(false);

    let timeout;
    const handleEnter =() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => setPopupContent(true), 500);
    }

    const handleLeave = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => setPopupContent(false), 800);
    }
    
    const getBasketCountText = () => {
        const count = basket.getTotalCount();
        return count > 0 ? ` (${count})` : '';
    };

    
    return (
        <header className="header position__center text__color_light">
            <div className="header__container">
                <div className="header__logo">
                    Интерьер.
                </div>
                <nav className="header__nav-container text__size_m">
                    <Link to="/" className="link_hover">Каталог</Link>
                    <Link to="/cart" className="link_hover" onMouseEnter={handleEnter} onMouseLeave={handleLeave} >Корзина{getBasketCountText()}</Link>
                    {useBasketPopup && basket.entries.length > 0 && showPopup &&
                        <div className="popup-basket__container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>                            
                            { basket.entries.map(entry => <ProductBasketCart key={entry.product.name} productEntry={entry} basket={basket} hideCountEditor={true}/>) }
                        </div>
                    }
                </nav>
                <nav className="header__nav-container-mobile">                
                    <Link to="/"><img src={require("./img/catalog.svg").default} alt="Каталог"/></Link>
                    <Link to="/cart"><img src={require("./img/cart.svg").default} alt="Корзина" /></Link>
                </nav>
            </div>
        </header>
    );
};

export default PageHeader;