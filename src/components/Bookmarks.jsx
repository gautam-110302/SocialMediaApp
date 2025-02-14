import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";

const Bookmarks = () => {
  const { postList } = useContext(PostList);
  const bookmarkedPosts = postList.filter(
    (postData) => postData.bookmarkState === true
  );

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
        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((postData) => (
            <Post key={postData.key} postData={postData} />
          ))
        ) : (
          <div className="text-center mt-5">
            <div className="alert alert-light" role="alert">
              No bookmarked posts yet.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Bookmarks;
