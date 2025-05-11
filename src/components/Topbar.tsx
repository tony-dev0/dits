import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row py-2 px-lg-5">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center text-white">
            <small>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +013 555 4196
            </small>
            <small className="px-3">|</small>
            <small>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              dits@example.com
            </small>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-white px-2" href="https://x.com">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a className="text-white px-2" href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="text-white px-2" href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="text-white pl-2" href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
