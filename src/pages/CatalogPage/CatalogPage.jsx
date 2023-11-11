import React from "react";
import PageHeader from "../../components/page-header/page-header"
import ProductList from "../../components/product-list/product-list"

const CatalogPage = ({catalogData, basket}) => (
    <>
      <PageHeader basket={ basket } useBasketPopup={true}/>
      <ProductList catalogData={catalogData} basket={basket} />
    </>
);

export default CatalogPage;