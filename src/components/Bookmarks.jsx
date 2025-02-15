import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";
import PostsButton from "./PostsButton";

const Bookmarks = () => {
  const { postList } = useContext(PostList);
  const bookmarkedPosts = postList.filter(
    (postData) => postData.bookmarkState === true
  );

  return (
    <>
      <PostsButton></PostsButton>
      <div className="position-sticky">
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
