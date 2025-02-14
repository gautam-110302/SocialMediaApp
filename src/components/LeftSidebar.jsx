import { useContext } from "react";
import { PostList } from "../store/PostList";
import styles from "./LeftSidebar.module.css";
import { LuTwitter } from "react-icons/lu";

const LeftSidebar = ({ selectedTab, handleTabButtonClick }) => {
  const { profileData } = useContext(PostList);

  return (
    <div className={`position-sticky top-0 start-0 ${styles.stickyLeft}`}>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
        style={{ width: "280px", height: "75vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">
            <LuTwitter />
            Twitter
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            onClick={() => handleTabButtonClick("Home")}
          >
            Home
          </li>
          <li
            className={`nav-link text-white ${
              selectedTab === "Explore" && "active"
            }`}
            onClick={() => handleTabButtonClick("Explore")}
          >
            Explore
          </li>
          <li
            className={`nav-link text-white ${
              selectedTab === "Bookmarks" && "active"
            }`}
            onClick={() => handleTabButtonClick("Bookmarks")}
          >
            Bookmarks
          </li>
          <li
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
            onClick={() => handleTabButtonClick("Create Post")}
          >
            Create Post
          </li>
        </ul>
      </div>
      <div
        className={`d-flex flex-column justify-content-end`}
        style={{ width: "280px", height: "20vh" }}
      >
        <div
          className="d-flex text-white text-decoration-none align-items-center"
          onClick={() => handleTabButtonClick("Profile")}
        >
          <img
            src={profileData.imageFile}
            alt="Profile Picture"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>{profileData.name}</strong>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
