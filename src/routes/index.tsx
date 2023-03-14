import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/layout/Layout";
import CountriesList from "../components/pages/CountriesList";
import Country from "../components/pages/Country";
import HomePage from "../components/pages/Home";
import LikedCountries from "../components/pages/LikedCountries";

function Index() {
  return (
    <Router>
      <Layout> </Layout>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<CountriesList />} />
          <Route path="/liked" element={<LikedCountries />} />
          <Route path="/country-page" element={<Country />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Index;
