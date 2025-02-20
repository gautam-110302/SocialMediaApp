import { useContext, useRef } from "react";
import { PostList } from "../store/PostList";

const EditProfile = ({ closeModal }) => {
  const { profileData } = useContext(PostList);

  const nameChanegBox = useRef();
  const bioChanegBox = useRef();
  const imageChangeBox = useRef();

  const handleSavechangesButton = () => {
    const profile = {
      name: nameChanegBox.current.value,
      bio: bioChanegBox.current.value,
      imageFile : imageChangeBox.current.files[0],
    };
    console.log(profile);
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
              <h5 className="modal-title">Edit Profile</h5>
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
                  <label htmlFor="profileName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control background-color text-white border-secondary"
                    id="profileName"
                    defaultValue={profileData.name}
                    ref={nameChanegBox}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="profileBio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control background-color text-white border-secondary"
                    id="profileBio"
                    rows="3"
                    defaultValue={profileData.bio}
                    ref={bioChanegBox}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="profileImage" className="form-label">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control background-color text-white border-secondary"
                    id="profileImage"
                    ref={imageChangeBox}
                  />
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
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
