import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../styles/app.module.css";
import ASSETS from "../../assets/images";
import BlogComponent from "../../components/BlogComponent";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { blogs } from "../data";
const Blogs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {blogs.map((blog, i) => {
              return (
                <div className="col-md-12 mb-3" key={i}>
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
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="mb-5">
            <div className="bg-secondary" style={{ padding: "30px" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Keyword"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-primary border-primary text-white">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-4">Categories</h3>
            <div className="bg-secondary" style={{ padding: "30px" }}>
              <ul className="list-inline m-0">
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-primary"
                    />{" "}
                    Web Design
                  </a>
                  <span className="badge badge-secondary badge-pill">150</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-primary"
                    />{" "}
                    Web Development
                  </a>
                  <span className="badge badge-secondary badge-pill">131</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-primary"
                    />
                    Online Marketing
                  </a>
                  <span className="badge badge-secondary badge-pill">78</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-primary"
                    />
                    Keyword Research
                  </a>
                  <span className="badge badge-secondary badge-pill">56</span>
                </li>
                <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mr-2 text-primary"
                    />
                    Email Marketing
                  </a>
                  <span className="badge badge-secondary badge-pill">98</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-4">Recent Post</h3>
            <div className="d-flex mb-3">
              <img
                className={`img-fluid ${style.blogimagesize}`}
                src={ASSETS.BLOG1}
                alt=""
              />
              <a
                href=""
                className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                style={{ height: "80px" }}
              >
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img
                className={`img-fluid ${style.blogimagesize}`}
                src={ASSETS.BLOG2}
                alt=""
              />
              <a
                href=""
                className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                style={{ height: "80px" }}
              >
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img
                className={`img-fluid ${style.blogimagesize}`}
                src={ASSETS.BLOG1}
                alt=""
              />
              <a
                href=""
                className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                style={{ height: "80px" }}
              >
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img
                className={`img-fluid ${style.blogimagesize}`}
                src={ASSETS.BLOG2}
                alt=""
              />
              <a
                href=""
                className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                style={{ height: "80px" }}
              >
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img
                className={`img-fluid ${style.blogimagesize}`}
                src={ASSETS.BLOG1}
                alt=""
              />
              <a
                href=""
                className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                style={{ height: "80px" }}
              >
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
          </div>

          <div className="mb-5">
            <img src={ASSETS.BLOG1} alt="" className="img-fluid" />
          </div>

          <div className="mb-5">
            <h3 className="mb-4">Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
              <a href="" className="btn btn-secondary m-1">
                Design
              </a>
              <a href="" className="btn btn-secondary m-1">
                Development
              </a>
              <a href="" className="btn btn-secondary m-1">
                Marketing
              </a>
              <a href="" className="btn btn-secondary m-1">
                SEO
              </a>
              <a href="" className="btn btn-secondary m-1">
                Writing
              </a>
              <a href="" className="btn btn-secondary m-1">
                Consulting
              </a>
            </div>
          </div>
          <div className="mb-5">
            <img src={ASSETS.BLOG2} alt="" className="img-fluid" />
          </div>
          <div>
            <h3 className="mb-4">Plain Text</h3>
            <div
              className="bg-secondary text-center"
              style={{ padding: "30px" }}
            >
              <p>
                Vero sea et accusam justo dolor accusam lorem consetetur,
                dolores sit amet sit dolor clita kasd justo, diam accusam no sea
                ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
              </p>
              <a href="" className="btn btn-primary py-2 px-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
