import Bookmarks from "./Bookmarks";
import CreatePost from "./CreatePost";
import Explore from "./Explore";
import Home from "./Home";
import Profile from "./Profile";
import RightSidebar from "./RightSidebar";

const Content = ({ selectedTab }) => {
  return (
    <div className="d-flex flex-row overflow-y-scroll position-relative background-color">
      <div className="d-flex flex-column position-relative background-color vh-100 vw-50">
        {selectedTab === "Home" && <Home />}
        {selectedTab === "Explore" && <Explore />}
        {selectedTab === "Bookmarks" && <Bookmarks />}
        {selectedTab === "Create Post" && <CreatePost />}
        {selectedTab === "Profile" && <Profile />}
      </div>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Content;
