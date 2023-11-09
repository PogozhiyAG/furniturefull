import React from "react";

const ProductCart = ({product, basket}) => {
    
    const addToCartClickHandler = () => basket.add(product);

    return(
        <div className="product__box" key={product.name}>
            <div className="product__image-command-container">
                <div className="product__command-bar">
                    <img className="product__command-button" src={require('../img/heart-outline.svg').default} alt="Добавить в избранное" />
                    <img className="product__command-button" onClick={addToCartClickHandler} src={require('../img/shopping-bag-line.svg').default} alt="Добавить в корзину" />
                </div>
                <img className="product__image" src={require('../img/product/' + product.imageUrl)} alt={product.name}/>
            </div>
            <h3 className="product__title text__size_lb">{product.name}</h3>
            <p className="product__desc text__size_s text__color_gray">{product.description}</p>
            <p className="text__size_lb text__color_quite-dark">{product.price} руб.</p>
    
        </div>
    );
}

export default ProductCart;