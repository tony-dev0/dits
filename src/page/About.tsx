import CustomNavbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import About from "./sections/about";
import Features from "./sections/features";
import Team from "./sections/team";
import Footer from "./sections/footer";
import SmallHero from "../components/smallHero";

const AboutPage = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <SmallHero title="About" navtext="About" />
      <About />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
