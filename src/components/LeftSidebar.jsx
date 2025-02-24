import { useContext, useState } from "react";
import { PostList } from "../store/PostList";
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const { profileData } = useContext(PostList);
  let [selectedTab, setSelectedTab] = useState("Home");
  const handleTabButtonClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div
      className={`position-sticky top-0 start-0 background-color d-flex flex-column align-items-end min-vh-100 vw-25 `}
    >
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-280px h-75`}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4" onClick={() => handleTabButtonClick("Home")}>
            <TbSocial />
            SociaLize
          </span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <Link to="/" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              onClick={() => handleTabButtonClick("Home")}
            >
              Home
            </li>
          </Link>
          <Link to="/explore" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Explore" && "active"
              }`}
              onClick={() => handleTabButtonClick("Explore")}
            >
              Explore
            </li>
          </Link>
          {/* <Link to="/bookmarks" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Bookmarks" && "active"
              }`}
              onClick={() => handleTabButtonClick("Bookmarks")}
            >
              Bookmarks
            </li>
          </Link> */}
          <Link to="/create-post" className="text-decoration-none">
            <li
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
              onClick={() => handleTabButtonClick("Create Post")}
            >
              Create Post
            </li>
          </Link>
        </ul>
      </div>
      <div className={`d-flex flex-column justify-content-end w-280px vh-20`}>
        <hr />
        <Link to="/profile" className="text-decoration-none">
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
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
