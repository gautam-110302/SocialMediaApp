
import styles from "./LeftSidebar.module.css";
import { LuTwitter } from "react-icons/lu";

const LeftSidebar = ({selectedTab, handleTabButtonClick}) => {
  

  return (
    <div className={`position-sticky top-0 start-0 ${styles.stickyLeft}`}>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4"><LuTwitter />Twitter</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={()=>handleTabButtonClick("Home")}>
            <a href="#" className={`nav-link text-white ${selectedTab ==="Home" && "active"}`} aria-current="page">
              Home
            </a>
          </li>
          <li onClick={()=>handleTabButtonClick("Explore")}>
            <a href="#" className={`nav-link text-white ${selectedTab ==="Explore" && "active"}`} >
              Explore
            </a>
          </li>
          <li onClick={()=>handleTabButtonClick("Bookmarks")}>
            <a href="#" className={`nav-link text-white ${selectedTab ==="Bookmarks" && "active"}`} >
              Bookmarks
            </a>
          </li>
          <li onClick={()=>handleTabButtonClick("Settings")}>
            <a href="#" className={`nav-link text-white ${selectedTab ==="Settings" && "active"}`} >
              Settings
            </a>
          </li>
          <li onClick={()=>handleTabButtonClick("Create Post")}>
            <a href="#" className={`nav-link text-white ${selectedTab ==="Create Post" && "active"}`} >
              Create Post
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
        style={{ width: "280px" }}
      >
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li onClick={()=>handleTabButtonClick("")}>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li onClick={()=>handleTabButtonClick("")}>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li onClick={()=>handleTabButtonClick("")}>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li onClick={()=>handleTabButtonClick("")}>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={()=>handleTabButtonClick("")}>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
