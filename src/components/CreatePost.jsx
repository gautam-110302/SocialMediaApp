import { useContext, useRef, useState } from "react";
import { PostList } from "../store/PostList";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const textInputElement = useRef();
  const imageInputElement = useRef();
  const [image, setImage] = useState(null);

  const handlePostButtonClick = () => {
    if (textInputElement.current.value === "" && image === null) {
      return;
    }

    let newPostData = {
      caption: textInputElement.current.value,
      imageFile: image,
      key: uuidv4(),
    };

    addPost(newPostData);

    textInputElement.current.value = "";
    setImage(null);
    imageInputElement.current.value = "";
  };

  const handleImageInputChange = () => {
    const file = imageInputElement.current.files[0];
    console.log(file);
    if (file) {
      setImage(file);
    }
  };

  const handleRemoveButton = () => {
    setImage(null);
    imageInputElement.current.value = "";
  };

  return (
    <>
      <div
        className="card border border-light"
        style={{
          width: "100%",
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{`Name`}</h5>
          <h6 className="card-subtitle mb-2 text-light">{`@username`}</h6>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              What's new?
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              ref={textInputElement}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Select photo
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleImageInputChange}
              ref={imageInputElement}
            />
          </div>
          {image && (
            <>
              <button onClick={handleRemoveButton}>Remove picture</button>
            </>
          )}
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
