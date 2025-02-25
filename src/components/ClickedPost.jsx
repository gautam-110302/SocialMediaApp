import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/PostList";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Comment from "./Comment";

const ClickedPost = () => {
  const { selectedPostKey, postList } = useContext(PostList);
  const selectedPost = postList.find((post) => post.key === selectedPostKey);

  return (
    <>
      <div className="d-flex flex-row text-white border border-secondary p-3">
        <Link to="/">
          <div className="d-flex flex-row align-items-center text-white py-1">
            <IoArrowBack />
          </div>
        </Link>
        <div className="d-flex flex-row align-items-center px-2">Post</div>
      </div>
      <Post key={selectedPostKey} postData={selectedPost}></Post>
      <div className="d-flex flex-column border border-secondary p-3">
        <h4 className="text-white">Comments</h4>
        {selectedPost.comments.map((singleComment) => (
          <Comment
            key={singleComment.commentKey}
            comment={singleComment}
          ></Comment>
        ))}
      </div>
    </>
  );
};

export default ClickedPost;
