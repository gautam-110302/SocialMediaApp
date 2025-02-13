import PostFooter from "./PostFooter";

const Post = ({postData}) => {
  return (
    <>
      <div
        className="card border border-light"
        style={{
          width: "100%",
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
          marginBottom : "10px",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{`Name`}</h5>
          <h6 className="card-subtitle mb-2 text-light" >{`@username`}</h6>
          {postData.imageFile && (<img
            src={postData.imageFile}
            className="card-img-top"
            alt="The content could not be loaded"
          ></img>)}
          <p className="card-text">
            {postData.caption}
          </p>
          <PostFooter postData={postData}></PostFooter>
        </div>
      </div>
    </>
  );
};

export default Post;
