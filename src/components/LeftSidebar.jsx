import { useContext } from "react";
import { PostList } from "../store/PostList";
import { LuTwitter } from "react-icons/lu";

const LeftSidebar = ({ selectedTab, handleTabButtonClick }) => {
  const { profileData } = useContext(PostList);

  return (
    <div
      className={`position-sticky top-0 start-0 background-color d-flex flex-column align-items-end min-vh-100 vw-25 `}
    >
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-280px h-75`}
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
          <a href="#" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              onClick={() => handleTabButtonClick("Home")}
            >
              Home
            </li>
          </a>
          <a href="#" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Explore" && "active"
              }`}
              onClick={() => handleTabButtonClick("Explore")}
            >
              Explore
            </li>
          </a>
          <a href="#" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Bookmarks" && "active"
              }`}
              onClick={() => handleTabButtonClick("Bookmarks")}
            >
              Bookmarks
            </li>
          </a>
          <a href="#" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
              onClick={() => handleTabButtonClick("Create Post")}
            >
              Create Post
            </li>
          </a>
        </ul>
      </div>
      <div
        className={`d-flex flex-column justify-content-end w-280px vh-20`}
      >
        <hr />
        <a href="#" className="text-decoration-none">
          <div
            className="d-flex text-white text-decoration-none align-items-center "
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
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
