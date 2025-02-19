import "./App.css";
import PostListProvider from "../store/PostList";
import Content from "../components/Content.jsx"
import LeftSidebar from "../components/LeftSidebar";
import { useState } from "react";


function App() {
  

  return (
    <PostListProvider>
      <div className="position-relative d-flex flex-row">
        <LeftSidebar></LeftSidebar>
        <Content ></Content>
      </div>
    </PostListProvider>
  );
}

export default App;
