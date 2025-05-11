import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ASSETS from "../../assets/images";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    <div className="container-fluid bg-secondary my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <Fade direction="left" triggerOnce>
              <img className="img-fluid w-100" src={ASSETS.OFFER} alt="" />
            </Fade>
          </div>
          <div className="col-lg-7 py-5 py-lg-0">
            <Fade direction="right" triggerOnce>
              <h6 className="text-primary text-uppercase font-weight-bold">
                Why Choose Us
              </h6>
              <h1 className="mb-4">Cutting Edge Digital Solution Provider</h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <ul className="list-inline">
                <li>
                  <h6>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      className="text-primary mr-3"
                    />
                    Best In Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      className="text-primary mr-3"
                    />
                    Process Digitization
                  </h6>
                </li>
                <li>
                  <h6>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      className="text-primary mr-3"
                    />
                    Training & Support
                  </h6>
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-3 py-2 px-4">
                Learn More
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
