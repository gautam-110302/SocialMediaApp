import Bookmarks from "./Bookmarks";
import CreatePost from "./CreatePost";
import Explore from "./Explore";
import Home from "./Home";
import RightSidebar from "./RightSidebar";
import Settings from "./Settings";

const Content = ({selectedTab}) => {
  return (
    <div
      className="d-flex flex-row overflow-y-scroll position-relative"
      style={{ backgroundColor: "rgb(33, 37, 41)" }}
    >
      <div
        className="d-flex flex-column position-relative"
        style={{ backgroundColor: "rgb(33, 37, 41)", height: "100vh", width: "50vw" }}
      >
        {selectedTab ==="Home" && <Home />}
        {selectedTab ==="Explore" && <Explore />}
        {selectedTab ==="Settings" && <Settings />}
        {selectedTab ==="Bookmarks" && <Bookmarks />}
        {selectedTab ==="Create Post" && <CreatePost />}
      </div>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Content;
