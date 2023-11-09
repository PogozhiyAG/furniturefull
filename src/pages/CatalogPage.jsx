import React from "react";
import PageHeader from "../components/page-header"
import ProductList from "../components/product-list"

export default ({catalogData, basket}) => (
    <>
      <PageHeader />
      <ProductList catalogData={catalogData} basket={basket} />
    </>
);
