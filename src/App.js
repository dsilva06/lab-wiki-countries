import React from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import allCountries from "./countries.json"


function App() {
  const[countries, setCountries]=React.useState(allCountries)
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/countries" element={<CountriesList countries={countries} />} />
        <Route path="/countries/:id" element={<CountriesDetails countries={countries} /> } />
      </Routes>
    </div>
  );
}
export default App;
