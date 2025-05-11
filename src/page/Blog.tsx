import CustomNavbar from "../components/Navbar";
import SmallHero from "../components/smallHero";
import Topbar from "../components/Topbar";
import Blogs from "./sections/blogs";
import Footer from "./sections/footer";

const BlogPage = () => {
  return (
    <div>
      <Topbar />
      <CustomNavbar />
      <SmallHero title="Latest Blog" navtext="Blog" />
      <Blogs />
      <Footer />
    </div>
  );
};

export default BlogPage;
