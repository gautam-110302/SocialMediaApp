import { Outlet } from "react-router-dom";
import RightSidebar from "./RightSidebar";

const Content = () => {
  return (
    <div className="d-flex flex-row overflow-y-scroll position-relative background-color">
      <div className="d-flex flex-column position-relative background-color vh-100 vw-50">
        <Outlet />
      </div>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Content;
