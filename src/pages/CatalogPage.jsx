import React from "react";
import PageHeader from "../components/page-header"
import ProductList from "../components/product-list"

export default ({catalogData, basket}) => (
    <>
      <PageHeader basket={ basket }/>
      <ProductList catalogData={catalogData} basket={basket} />
    </>
);
