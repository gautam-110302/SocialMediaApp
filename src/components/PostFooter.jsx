import { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { PostList } from "../store/PostList";

const PostFooter = ({ postData }) => {
  let { handleLikeButtonClick, handleBookmarkButtonClick } =
    useContext(PostList);

  const handleCommentButtonClick = () => {};

  return (
    <div className="d-flex btn-group">
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        onClick={() => handleLikeButtonClick(postData.key)}
      >
        {!postData.likeState && <AiOutlineLike />}
        {postData.likeState && <AiFillLike />}
        {postData.likes}
      </button>
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        onClick={handleCommentButtonClick}
      >
        <FaRegComment />
        {postData.comments.length}
      </button>
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        onClick={() => handleBookmarkButtonClick(postData.key)}
      >
        {!postData.bookmarkState && <FaRegBookmark />}
        {postData.bookmarkState && <FaBookmark />}
        {postData.bookmarks}
      </button>
    </div>
  );
};

export default PostFooter;
