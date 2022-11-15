import { Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ListBeers from "./pages/ListBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="//beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
