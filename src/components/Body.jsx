import Content from "./Content";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Body = () => {
  return (
    <>
      <div className="position-relative d-flex flex-row">
        <LeftSidebar></LeftSidebar>
        <Content></Content>
        <RightSidebar></RightSidebar>
      </div>
    </>
  );
};

export default Body;
