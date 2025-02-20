import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { PostList } from "../store/PostList";
import { useContext, useState } from "react";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("Posts");
  const { profileData } = useContext(PostList);
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <div className="d-flex flex-row text-white border border-secondary p-3">
          <Link to="/">
            <div className="d-flex flex-row align-items-center text-white py-1">
              <IoArrowBack />
            </div>
          </Link>
          <div className="d-flex flex-row align-items-center px-2">
            {profileData.name}
          </div>
        </div>
        <div className="text-white border border-secondary p-3">
          <div className="d-flex flex-row justify-content-between">
            <div className="border border-2 rounded-circle">
              <img
                src={profileData.imageFile}
                alt="Profile Picture"
                className="rounded-circle r-vw-10"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary border border-secondary "
              onClick={openModal} // Open modal when clicked
            >
              Edit profile
            </button>
          </div>
          <div className="py-2">
            <div>{profileData.name}</div>
            <div>@{profileData.username}</div>
            <div>{profileData.bio}</div>
          </div>
        </div>
        <div className="border border-secondary text-white px-3">
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Basic example"
          >
            <Link to="/profile">
              <button
                type="button"
                className={`btn btn-dark ${
                  selectedTab === "Posts" && "active"
                }`}
                onClick={() => {
                  setSelectedTab("Posts");
                }}
              >
                Posts
              </button>
            </Link>
            <Link to="/profile/likes">
              <button
                type="button"
                className={`btn btn-dark ${
                  selectedTab === "Likes" && "active"
                }`}
                onClick={() => {
                  setSelectedTab("Likes");
                }}
              >
                Likes
              </button>
            </Link>
            <Link to="/profile/bookmarks">
              <button
                type="button"
                className={`btn btn-dark ${
                  selectedTab === "Bookmarks" && "active"
                }`}
                onClick={() => {
                  setSelectedTab("Bookmarks");
                }}
              >
                Bookmarks
              </button>
            </Link>
          </div>
        </div>
        <div className="border border-secondary text-white p-3">
          <Outlet />
        </div>
      </div>
      {/* Render the modal conditionally */}
      {showModal && <EditProfile closeModal={closeModal} />}
    </div>
  );
};

export default Profile;
