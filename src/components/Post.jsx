import { useContext } from "react";
import PostFooter from "./PostFooter";
import { PostList } from "../store/PostList";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Post = ({ postData }) => {
  const { setSearchedItem, deletePost } = useContext(PostList);
  
    const handleLinkClick = (tagName)=>{
      const newSearchedItem = {
        string:tagName,
        type:"tag",
      }
      setSearchedItem(newSearchedItem);
    }

  return (
    <>
      <div
        className="card border border-secondary rounded-0"
        style={{
          width: "100%",
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
        }}
      >
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={postData.profileData.imageFile}
                alt=""
                width="50"
                height="50"
                className="rounded-circle me-2"
              />
            </div>
            <div>
              <h5 className="card-title">{postData.profileData.name}</h5>
              <h6 className="card-subtitle mb-2 text-light">{`@${postData.profileData.username}`}</h6>
            </div>
          </div>
          {postData.yourPost && (<a href="#" className="text-danger" onClick={()=>deletePost(postData.key)}><MdDelete /></a>)}
          </div>
          {postData.imageFile && (
            <img
              src={postData.imageFile}
              className="card-img-top"
              alt="The content could not be loaded"
            ></img>
          )}
          <p className="card-text">{postData.caption}</p>
          <div className="d-flex">
            {postData.tags.map((tag) => (
              <Link
                to="/explore/searched-posts"
                className="text-decoration-none text-white"
                onClick={()=>handleLinkClick(tag)}
                key={tag}
              >
                <button className="btn btn-primary p-2 m-1">
                  {tag}
                </button>
              </Link>
            ))}
          </div>
          <PostFooter postData={postData}></PostFooter>
        </div>
      </div>
    </>
  );
};

export default Post;
