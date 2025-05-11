import CustomNavbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SmallHero from "../components/smallHero";
import Projects from "./sections/Projects";
import Footer from "./sections/footer";
import Services from "./sections/services";
import Testimonial from "./sections/testimonial";

const ServicesPage = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <SmallHero title="Service" navtext="Service" />
      <Projects />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default ServicesPage;
