import { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { PostList } from "../store/PostList";

const PostFooter = ({ postData }) => {

  let {handleLikes, handleBookmarks } = useContext(PostList)
  let [isLikeButtonClicked, setLikeButtonClicked] = useState(false);
  const handleLikeButtonClick = () => {
    let likeButtonState = !isLikeButtonClicked;
    setLikeButtonClicked(likeButtonState);
    handleLikes(postData.key, likeButtonState);
  };

  let [isBookmarkButtonClicked, setBookmarkButtonClicked] = useState(false);
  const handleBookmarkButtonClick = () => {
    let bookmarkButtonState = !isBookmarkButtonClicked;
    setBookmarkButtonClicked(bookmarkButtonState);
    handleBookmarks(postData.key, bookmarkButtonState);
  };

  const handleCommentButtonClick = () => {};

  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        style={{ width: "33%" }}
        onClick={handleLikeButtonClick}
      >
        {!isLikeButtonClicked && <AiOutlineLike />}
        {isLikeButtonClicked && <AiFillLike />}
        {postData.likes}
      </button>
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        style={{ width: "34%" }}
        onClick={handleCommentButtonClick}
      >
        <FaRegComment />
        {postData.comments.length}
      </button>
      <button
        type="button"
        className="btn btn-dark border border-secondary"
        style={{ width: "33%" }}
        onClick={handleBookmarkButtonClick}
      >
        {!isBookmarkButtonClicked && <FaRegBookmark />}
        {isBookmarkButtonClicked && <FaBookmark />}
        {postData.bookmarks}
      </button>
    </div>
  );
};

export default PostFooter;
