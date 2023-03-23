import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/layout/NavBar";
import CountriesList from "../pages/CountriesList";
import CountryInfo from "../pages/CountryInfo";
import HomePage from "../pages/Home";
import LikedCountries from "../pages/LikedCountries";

function Index() {
  return (
    <Router>
      <Navbar> </Navbar>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<CountriesList />} />
          <Route path="/liked" element={<LikedCountries />} />
          <Route path="/country" element={<CountryInfo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Index;
