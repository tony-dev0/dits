import { testimonials, settings } from "../data";
import styles from "../../styles/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Scrollup from "../../components/Scrollup";

const Testimonial = () => {
  const [pos, setPos] = useState<number>(0);
  const elemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (elemRef.current) {
        const rect = elemRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elemTop = rect.top + scrollTop;
        setPos(elemTop);
      }
    };

    // Wait for layout to be painted
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once on mount too

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-fluid py-5" ref={elemRef}>
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Testimonial
            </h6>
            <h1 className="mb-4">Our Clients Say</h1>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {testimonials.map((val, i) => {
                return (
                  <div className={styles.item} key={i}>
                    <div className="position-relative bg-secondary p-4">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className={`fa-3x text-primary ${styles.iconpos}`}
                      />
                      <div className="d-flex align-items-center mb-3">
                        <img
                          className={`img-fluid rounded-circle ${styles.imageres}`}
                          src={val.image}
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="font-weight-semi-bold m-0">
                            {val.name}
                          </h6>
                          <small>- {val.role}</small>
                        </div>
                      </div>
                      <p className="m-0">{val.text}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Scrollup pos={pos} />
      </div>
    </>
  );
};

export default Testimonial;
