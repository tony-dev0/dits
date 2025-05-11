import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SmallHero = ({ title, navtext }: any) => {
  return (
    <div className="jumbotron jumbotron-fluid mb-5">
      <div className="container text-center py-5">
        <h1 className="text-white display-3">{title}</h1>
        <div className="d-inline-flex align-items-center text-white">
          <p className="m-0">
            <Link className="text-white" to="/">
              Home
            </Link>
          </p>
          <FontAwesomeIcon icon={faCircle} className="px-3" />
          <p className="m-0">{navtext}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallHero;
