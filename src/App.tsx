import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./page/Pricing";
import ServicesPage from "./page/Services";
import AboutPage from "./page/About";
import ErrorPage from "./page/Error";
import HomePage from "./page/Home";
import ContactPage from "./page/Contact";
import BlogPage from "./page/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
