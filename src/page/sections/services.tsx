import { Fade } from "react-awesome-reveal";
import { services } from "../data";

const Services = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Services
            </h6>
            <h1 className="mb-4">Best IT Services</h1>
          </div>

          <div className="row pb-3">
            {services.map((service, i) => {
              return (
                <div className="col-lg-3 col-md-6mb-5" key={i}>
                  <Fade
                    direction="up"
                    cascade={false}
                    delay={i * 100}
                    triggerOnce
                  >
                    <div className="d-flex align-items-center justify-content-center bg-primary p-4">
                      <img
                        className="pr-3"
                        src={service.image}
                        width={50}
                        alt=""
                      />
                      <h6 className="text-white font-weight-medium m-0">
                        {service.name}
                      </h6>
                    </div>
                    <div
                      className="py-4 px-3"
                      style={{ background: "#f2f2f4" }}
                    >
                      <p>{service.text}</p>
                      <a className="border-bottom text-decoration-none" href="">
                        Read More
                      </a>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
