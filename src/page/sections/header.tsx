import Hero from "../../components/Hero";
import CustomNavbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const Header = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <Hero />
    </div>
  );
};

export default Header;
