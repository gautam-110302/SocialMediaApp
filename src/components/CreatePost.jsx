import { useState } from "react";

const CreatePost = () => {
  const handlePostButtonClick = (event) => {
    console.log(event);
  };

  const [showImage, setShowImage] = useState(false);

  const handleClose = () => {
    setShowImage(false);
  };

  const handleShow = () => {
    setShowImage(true);
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
            ></textarea>
          </div>
          <button onClick={handleShow}>Choose picture</button>
          {showImage && (
            <>
            <button className = "btn btn-danger float-end" onClick={handleClose}>Close</button>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
               Select photo
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            </>)
          }
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
