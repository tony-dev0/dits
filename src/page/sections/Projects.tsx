import CountUp from "react-countup";

const Projects = () => {
  return (
    <div className="container-fluid bg-secondary my-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 py-5 py-lg-0">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Start Now
            </h6>
            <h1 className="mb-4">Get Your Project Running</h1>
            <p className="mb-4">
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </p>

            <div className="row">
              <div className="col-sm-4">
                <h1 className="text-primary mb-2">
                  <CountUp
                    start={0}
                    end={225}
                    duration={3}
                    delay={0}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h1>
                <h6 className="font-weight-bold mb-4">Skilled Experts</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-primary mb-2">
                  <CountUp
                    start={0}
                    end={1050}
                    duration={3}
                    delay={0}
                    separator=""
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h1>
                <h6 className="font-weight-bold mb-4">Happy Clients</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-primary mb-2">
                  <CountUp
                    start={0}
                    end={2500}
                    duration={3}
                    delay={0}
                    separator=""
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h1>
                <h6 className="font-weight-bold mb-4">Complete Projects</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-primary py-5 px-4 px-sm-5">
              <form className="py-5" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 p-4"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select border-0 px-4"
                    style={{ height: "47px" }}
                  >
                    <option defaultValue={"0"}>Select A Project</option>
                    <option value="1">Graphics Design</option>
                    <option value="2">Web Development</option>
                    <option value="3">Application Development</option>
                  </select>
                </div>
                <div>
                  <button
                    className="btn btn-dark btn-block border-0 py-3"
                    type="submit"
                  >
                    Start Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
