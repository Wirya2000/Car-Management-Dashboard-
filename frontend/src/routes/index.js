import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./../App.tsx";
import DetailPage from "./Detail";
import Layout from "../components/Layout";
import AdminRoute from "./Admin/routes";
import Login from "./Login";
import PrivateRoutes from "./../components/PrivateRoutes";
import AdminLayout from "../components/AdminLayout/index.tsx";
import LandingPage from "./Landing/index.js";
import CariPage from "./Cari/index.js";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/cari"
            element={
              <Layout>
                <CariPage />
              </Layout>
            }
          />
          <Route
            path="/detail/:idCar"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />

          {/* Private Routes */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoutes>
                <AdminLayout>
                  <AdminRoute />
                </AdminLayout>
              </PrivateRoutes>
            }
          />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default RouterApp;
