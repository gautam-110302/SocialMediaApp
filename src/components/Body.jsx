import Content from "./Content";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";


const Body = () => {
  let [selectedTab,setSelectedTab] = useState("Home");
  const onTabButtonClick = (buttonPressed)=>{
    console.log("check")
    setSelectedTab(buttonPressed);
  }

  return (
    <>
      <div className="position-relative d-flex flex-row">
        <LeftSidebar selectedTab={selectedTab} handleTabButtonClick={onTabButtonClick}></LeftSidebar>
        <Content selectedTab={selectedTab}></Content>
      </div>
    </>
  );
};

export default Body;
