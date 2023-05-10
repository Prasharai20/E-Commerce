import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Layout from "./Layout";
import ProductPage from "./Components/ProductPage";
import SignUp from "./Authentication/SignUp";
import SignUp2 from "./Authentication/SignUp2";
import UncontrolledForm from "./UncontrolledForm";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up2" element={<SignUp2 />} />
          <Route path="/" element={<Layout component={<Home />} />} />
          <Route
            path="/about-us"
            element={<Layout component={<AboutUs />} />}
          />
          <Route
            path="/product/:id"
            element={<Layout component={<ProductPage />} />}
          />
          <Route path="/uncontrolled" element={<UncontrolledForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
