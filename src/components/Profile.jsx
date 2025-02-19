import { IoArrowBack } from "react-icons/io5";

const Profile = () => {
  return (
    <div>
      <div>
        <div className="d-flex flex-row text-white border border-secondary">
          <div className="d-flex flex-row align-items-center">
            <IoArrowBack />
          </div>
          <div>
            <div>Name</div>
            <div>Number of Posts</div>
          </div>
        </div>
        <div className="text-white border border-secondary">
          <div className="d-flex flex-row justify-content-between">
            <div className="border border-2 rounded-circle">
              <img
                src="../public/cat.png"
                alt="Profile Picture"
                className="rounded-circle r-vw-10"
              />
            </div>
            <button type="button" className="btn btn-primary border border-secondary ">Edit profile</button>
          </div>
          <div>
            <div>Name</div>
            <div>username</div>
            <div>bio</div>
          </div>
        </div>
        <div className="border border-secondary text-white">
          posts likes bookmarks
        </div>
        <div></div>
      </div >
    </div>
  );
};

export default Profile;
