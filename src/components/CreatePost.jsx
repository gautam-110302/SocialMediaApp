import { useContext, useRef, useState } from "react";
import { PostList } from "../store/PostList";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost, profileData } = useContext(PostList);
  const textInputElement = useRef();
  const imageInputElement = useRef();
  const tagInputElement = useRef();
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();

  const handlePostButtonClick = () => {
    if (textInputElement.current.value.trim() === "" && image === null) {
      setErrorMessage("Please add text or an image to your post.");
      return;
    }
    let tagArray = [];
    if(tagInputElement.current.value.trim() !== ""){
      tagArray = tagInputElement.current.value.split(" ");
    }

    let newPostData = {
      profileData: profileData,
      caption: textInputElement.current.value,
      imageFile: image,
      tags : tagArray,
      likes: 0,
      comments: [],
      bookmarks: 0,
      key: uuidv4(),
      likeState: false,
      bookmarkState: false,
      yourPost: true,
    };

    addPost(newPostData);

    textInputElement.current.value = "";
    setImage(null);
    imageInputElement.current.value = "";
    setErrorMessage("");
    navigator("/");
  };

  const handleImageInputChange = () => {
    const file = imageInputElement.current.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemoveButton = () => {
    setImage(null);
    imageInputElement.current.value = "";
  };

  return (
    <>
      <div className="card border border-light w-100 text-white background-color">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={profileData.imageFile}
                alt=""
                width="50"
                height="50"
                className="rounded-circle me-2"
              />
            </div>
            <div>
              <h5 className="card-title">{profileData.name}</h5>
              <h6 className="card-subtitle mb-2 text-light">{`@${profileData.username}`}</h6>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="postCaption" className="form-label">
              What's new?
            </label>
            <textarea
              className="form-control"
              id="postCaption"
              rows="8"
              placeholder="what's going on?"
              ref={textInputElement}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="postPhoto" className="form-label">
              Select photo
            </label>
            <input
              className="form-control"
              type="file"
              id="postPhoto"
              onChange={handleImageInputChange}
              ref={imageInputElement}
            />
          </div>
          {image && (
            <>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleRemoveButton}
              >
                Remove picture
              </button>
            </>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="mb-3 py-2">
            <label htmlFor="postTags" className="form-label">
              Add Tags
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ensure there is a space between each tag"
              aria-label="default input example"
              id="postTags"
              ref={tagInputElement}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary float-end"
            onClick={handlePostButtonClick}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
