import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/app.module.css";
import {
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  12th Avenue, Johannesburg, S.A
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  +013 555 4196
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  dits@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-outline-light btn-social mr-2"
                    href="https://x.com"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social mr-2"
                    href="https://linkedin.com"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social mr-2"
                    href="https://instagram.com"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social mr-2"
                    href="https://youtube.com"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="/">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Home
                  </a>
                  <a className="text-white mb-2" href="/about">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    About Us
                  </a>
                  <a className="text-white mb-2" href="/service">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Our Services
                  </a>
                  <a className="text-white mb-2" href="/price">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Pricing Plan
                  </a>
                  <a className="text-white" href="/contact">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className={`form-control border-light ${styles.p30}`}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5 ${styles.darkborder}`}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a href="#">Digital IT Solution</a>. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
