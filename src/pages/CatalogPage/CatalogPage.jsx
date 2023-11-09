import React from "react";
import PageHeader from "../../components/page-header/page-header"
import ProductList from "../../components/product-list"
import './CatalogPage.css'

const CatalogPage = ({catalogData, basket}) => (
    <>
      <PageHeader basket={ basket }/>
      <ProductList catalogData={catalogData} basket={basket} />
    </>
);

export default CatalogPage;