import styles from "../styles/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";

const BlogComponent = ({
  name,
  role,
  blogimage,
  title,
  text,
  image,
  day,
  month,
}: any) => {
  return (
    <div>
      <div className="position-relative">
        <img className="img-fluid w-100" src={blogimage} alt="" />
        <div
          className={`position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle ${styles.circlepos}`}
        >
          <h4 className="font-weight-bold mb-n1">{day}</h4>
          <small className="text-white text-uppercase">{month}</small>
        </div>
      </div>
      <div className="bg-secondary mb-3" style={{ padding: "30px 12px" }}>
        <div className="d-flex mb-3">
          <div className="d-flex align-items-center">
            <img
              className={`rounded-circle ${styles.blogimage}`}
              src={image}
              alt=""
            />
            <a className="text-muted ml-2" href="">
              {name}
            </a>
          </div>
          <div className="d-flex align-items-center ml-4">
            <FontAwesomeIcon icon={faBookmark} className="text-primary" />
            <a className="text-muted ml-2" href="">
              {role}
            </a>
          </div>
        </div>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>{text}</p>
        <a
          className="border-bottom border-primary text-uppercase text-decoration-none"
          href="/blog"
        >
          Read More <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    </div>
  );
};

export default BlogComponent;
