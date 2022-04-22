import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components';
import { ProductsListPage, ProductsAddPage } from '../routes';
import './Views.scss';

const Views = () => {
  return (
    <div className="views-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsListPage />} />
          <Route path="add" element={<ProductsAddPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Views;
