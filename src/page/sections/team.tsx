import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { members } from "../data";
import { Fade } from "react-awesome-reveal";

const Team = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <h6 className="text-primary text-uppercase font-weight-bold">
            Delivery Team
          </h6>
          <h1 className="mb-4">Meet Our Team Leads</h1>
        </div>
        <div className="row">
          {members.map((member, i) => {
            return (
              <div className="col-lg-3 col-md-6" key={i}>
                <Fade direction="up" delay={i * 100} triggerOnce>
                  <div className="team card position-relative overflow-hidden border-0 mb-5">
                    <img className="card-img-top" src={member.photo} alt="" />
                    <div className="card-body text-center p-0">
                      <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                        <h5 className="font-weight-bold">{member.name}</h5>
                        <span>{member.role}</span>
                      </div>
                      <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                        <a
                          className="btn btn-outline-dark btn-social mr-2"
                          href="https://x.com"
                        >
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a
                          className="btn btn-outline-dark btn-social mr-2"
                          href="https://facebook.com"
                        >
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                          className="btn btn-outline-dark btn-social mr-2"
                          href="https://linkedin.com"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                          className="btn btn-outline-dark btn-social"
                          href="https://instagram.com"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
