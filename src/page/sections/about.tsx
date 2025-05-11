import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ASSETS from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid w-100" src={ASSETS.ABOUT} alt="" />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">22+ Years Experience</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <Fade direction="right" triggerOnce>
                <h6 className="text-primary text-uppercase font-weight-bold">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Digital Solution, From Concept to delivery{" "}
                </h1>
                <p className="mb-4">
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                  dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                  elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos
                  et erat sed diam duo
                </p>
                <div className="pt-2">
                  <a
                    href=""
                    className="btn btn-primary w-25 py-2 px-4 d-none d-lg-block"
                  >
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
