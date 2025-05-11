import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <Fade direction="down" triggerOnce>
            <h1 className="text-primary mb-4">Trusted & Reliable</h1>
            <h1 className="text-white d-3 mb-5">Digital Solution For You</h1>
          </Fade>
          <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
            <Fade direction="up" triggerOnce>
              <p>
                Our team of digital product experts can help your business
                succeed online by leveraging our extensive industry knowledge
                and experience.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
