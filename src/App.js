import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Settings from "./Pages/Settings";
import Ingridients from "./Components/Ingridients";
import Recipes from "./Pages/Recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/ingridients/:mealId" element={<Ingridients />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
