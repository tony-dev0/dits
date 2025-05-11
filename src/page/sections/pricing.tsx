import { Fade } from "react-awesome-reveal";
import styles from "../../styles/app.module.css";
import { plans } from "../data";
const Pricing = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Pricing Plan
            </h6>
            <h1 className="mb-4">Affordable Pricing Packages</h1>
          </div>
          <div className="row">
            {plans.map((plan, i) => {
              return (
                <div className="col-md-4 mb-5" key={i}>
                  <Fade
                    direction="up"
                    cascade={false}
                    delay={i * 100}
                    triggerOnce
                  >
                    <div className="bg-secondary">
                      <div className="text-center p-4">
                        <h1 className="display-4 mb-0">
                          <small
                            className={`align-top text-muted font-weight-medium ${styles.price}`}
                          >
                            $
                          </small>
                          {plan.price}
                          <small
                            className={`align-bottom text-muted font-weight-medium ${styles.plan}`}
                          >
                            /Mo
                          </small>
                        </h1>
                      </div>
                      <div className="bg-primary text-center p-4">
                        <h3 className="m-0">{plan.name}</h3>
                      </div>
                      <div className="d-flex flex-column align-items-center py-4">
                        {plan.features.map((feature, j) => {
                          return (
                            <div key={j}>
                              <p>{feature}</p>
                            </div>
                          );
                        })}
                        <a href="" className="btn btn-primary py-2 px-4 my-2">
                          {plan.name == "Free"
                            ? "Sign up for free"
                            : "Get Started"}
                        </a>
                      </div>
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

export default Pricing;
