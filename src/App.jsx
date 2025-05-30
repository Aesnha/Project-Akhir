import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./components/layout";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
