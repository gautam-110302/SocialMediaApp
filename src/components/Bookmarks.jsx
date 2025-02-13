import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";

const Bookmarks = () => {
  const {bookmarksList} = useContext(PostList);
  return (
    <>
      <div className={`position-sticky top-0 start-0`}>
        <button
          type="button"
          className="btn btn-dark w-100"
          style={{ height: "10vh", zIndex: 1000 }}
        >
          Posts
        </button>
      </div>
      <div
        className="position-sticky"
        style={{ height: "calc(100% - 10vh - 10px)", paddingBottom: "10px" }}
      >
        {bookmarksList.map((postData)=>{
          return(
            <Post key={postData.key} postData={postData}></Post>
          )
        })}
      </div>
    </>
  );
};

export default Bookmarks;
