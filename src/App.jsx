import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router";

//components and pages
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Weddings from "./pages/Weddings";
import Parties from "./pages/Parties";
import Arrangements from "./pages/Arrangements";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/arrangements" element={<Arrangements />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
