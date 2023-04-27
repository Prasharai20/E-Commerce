import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Layout from "./Layout";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout component={<Home />} />} />
        <Route path="/about-us" element={<Layout component={<AboutUs />} />} />
        <Route
          path="/product/:id"
          element={<Layout component={<ProductPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
