import { useContext, useState } from "react";
import { PostList } from "../store/PostList";
import { useNavigate } from "react-router-dom";

const AddComments = ({ closeModal, postData }) => {
  let navigator = useNavigate();
  let [commentedText, setCommentedText] = useState("");
  const { handleCommentButtonClick, setSelectedPostKey } = useContext(PostList);
  const handleCommentBoxChange = (event) => {
    setCommentedText(event.target.value);
  };

  const handleSavechangesButton = () => {
    let comment = commentedText.trim();
    if (comment !== "") {
      handleCommentButtonClick(postData.key, comment);
      setSelectedPostKey(postData.key);
      navigator("/post")
    }
  };
  return (
    <>
      <div
        className="modal d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content background-color text-white">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">Add Comment</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="commentBox" className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control background-color text-white border-secondary"
                    id="commentBox"
                    rows="3"
                    onChange={handleCommentBoxChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer border-secondary">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSavechangesButton}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComments;
