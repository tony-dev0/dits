import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Scrollup = ({ pos }: { pos: number }) => {
  const location = useLocation();
  const [scr, setscr] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && pos > 0) {
      const onScroll = () => {
        if (window.scrollY > pos) {
          setscr(true);
        } else {
          setscr(false);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [location.pathname, pos]);

  return scr ? (
    <a href="#" className="btn btn-lg btn-primary back-to-top">
      <FontAwesomeIcon icon={faAnglesUp} />
    </a>
  ) : null;
};

export default Scrollup;
