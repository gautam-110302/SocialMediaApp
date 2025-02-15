import PostFooter from "./PostFooter";

const Post = ({ postData }) => {
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
          {postData.imageFile && (
            <img
              src={postData.imageFile}
              className="card-img-top"
              alt="The content could not be loaded"
            ></img>
          )}
          <p className="card-text">{postData.caption}</p>
          <PostFooter postData={postData}></PostFooter>
        </div>
      </div>
    </>
  );
};

export default Post;
