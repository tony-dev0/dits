import CustomNavbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SmallHero from "../components/smallHero";
import Footer from "./sections/footer";
import Pricing from "./sections/pricing";
import Testimonial from "./sections/testimonial";

const PricingPage = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <SmallHero title="Pricing" navtext="Pricing" />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default PricingPage;
