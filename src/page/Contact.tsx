import CustomNavbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SmallHero from "../components/smallHero";
import ContactMapAndForm from "./sections/ContactMapAndForm";
import Footer from "./sections/footer";

const ContactPage = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <SmallHero title="Contact" navtext="Contact" />
      <ContactMapAndForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
