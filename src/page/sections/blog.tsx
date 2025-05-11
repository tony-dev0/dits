import BlogComponent from "../../components/BlogComponent";
import { blogs } from "../data";
const Blog = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Blog
            </h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            {blogs.slice(0, 2).map((blog, i) => {
              return (
                <div className="col-md-6 mb-5" key={i}>
                  <BlogComponent
                    name={blog.name}
                    role={blog.role}
                    blogimage={blog.blogimage}
                    title={blog.title}
                    text={blog.text}
                    image={blog.image}
                    day={blog.day}
                    month={blog.month}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
