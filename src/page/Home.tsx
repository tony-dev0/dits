import Header from "./sections/header";
import About from "./sections/about";
import Services from "./sections/services";
import Team from "./sections/team";
import Features from "./sections/features";
import Testimonial from "./sections/testimonial";
import Blog from "./sections/blog";
import Pricing from "./sections/pricing";
import Footer from "./sections/footer";
import Projects from "./sections/Projects";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Services />
      <Features />
      <Pricing />
      <Team />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
