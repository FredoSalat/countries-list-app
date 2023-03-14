import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/layout/Layout";
import CountriesList from "../components/pages/CountriesList";
import HomePage from "../components/pages/HomePage";
import LikedCountries from "../components/pages/LikedCountries";

type Props = {};

function Index() {
  return (
    <Router>
      <Layout> </Layout>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<CountriesList />} />
          <Route path="/liked" element={<LikedCountries />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Index;
