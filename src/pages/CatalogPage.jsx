import React from "react";
import PageHeader from "../components/page-header"
import ProductList from "../components/product-list"

const CatalogPage = ({catalogData, basket}) => (
    <>
      <PageHeader basket={ basket }/>
      <ProductList catalogData={catalogData} basket={basket} />
    </>
);

export default CatalogPage;