import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../../pages/home/Home.page";
import Layout from "../Layout/Layout";

// const Docs = lazy(() => import('../../pages/Docs/Docs'));

const Router: React.FC = () => {
  return (
    // <Suspense fallback="">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    // </Suspense>
  );
};

export default Router;
