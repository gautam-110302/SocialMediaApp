import styles from "./RightSidebar.module.css";
import Footer from "./Footer";

const RightSidebar = () => {
  return (
    <div
      className={`position-sticky top-0 end-0 overflow-auto d-flex flex-column align-items-start min-vh-100 vw-25`}
    >
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-280px`}
      >
        <form
          className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-white"
          role="search"
        >
          <input
            type="search"
            className="background-color form-control text-white border border-secondary"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <hr />
        <div className="card background-color text-white p-3 border border-secondary">
          <div className="card-header text-center">Trending</div>
          <ul className="list-group background-color text-white border-0">
            <a href="#" className="text-decoration-none">
              <li className="list-group-item background-color text-white border-0">
                An item
              </li>
            </a>
            <a href="#" className="text-decoration-none">
              <li className="list-group-item background-color text-white border-0">
                A second item
              </li>
            </a>
            <a href="#" className="text-decoration-none">
              <li className="list-group-item background-color text-white border-0">
                A third item
              </li>
            </a>

            <div className="card-footer ">
              <a className="link-opacity-100 text-white" href="#">
                See more
              </a>
            </div>
          </ul>
        </div>
        <hr />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RightSidebar;
