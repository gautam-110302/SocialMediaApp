import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";

const YourPosts = () => {
  const { postList } = useContext(PostList);
  const yourPosts = postList.filter(
    (postData) => postData.yourPost === true
  );

  return (
    <>
      <div className="position-sticky">
        {yourPosts.length > 0 ? (
          yourPosts.map((postData) => (
            <Post key={postData.key} postData={postData} />
          ))
        ) : (
          <div className="text-center mt-5">
            <div className="alert alert-light" role="alert">
              No posts yet.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default YourPosts;
