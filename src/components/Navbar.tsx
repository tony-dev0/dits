import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../page/data";
const CustomNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <Container fluid>
        <Navbar
          expand="lg"
          className="navbar-light bg-light py-3 py-lg-0 px-lg-5 border-0"
        >
          <Navbar.Brand href="#" className="ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> DITS{" "}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto py-0">
              {routes.map((route, i) => {
                return (
                  <Link
                    key={i}
                    to={route.link}
                    className={
                      pathname == route.link
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    {route.path}
                  </Link>
                );
              })}
            </Nav>

            <a
              href=""
              className="btn btn-primary py-2 px-4 d-none d-lg-block font-weight-bold"
            >
              Start A Project
            </a>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default CustomNavbar;
