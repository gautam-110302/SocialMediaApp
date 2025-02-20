import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";

const Likes = () => {
  const { postList } = useContext(PostList);
  const likedPosts = postList.filter(
    (postData) => postData.likeState === true
  );

  return (
    <>
      <div className="position-sticky">
        {likedPosts.length > 0 ? (
          likedPosts.map((postData) => (
            <Post key={postData.key} postData={postData} />
          ))
        ) : (
          <div className="text-center mt-5">
            <div className="alert alert-light" role="alert">
              No liked posts yet.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Likes;
