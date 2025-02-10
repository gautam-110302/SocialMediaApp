import PostFooter from "./PostFooter";

const Post = () => {
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
          <h6 className="card-subtitle mb-2 text-light" >{`@username`}</h6>
          <img
            src="/public/react.png"
            className="card-img-top"
            alt="The content could not be loaded"
          ></img>
          <p className="card-text">
            {`Some quick example text to build on the card title and make up the
            bulk of the card's content.`}
          </p>
          <PostFooter></PostFooter>
        </div>
      </div>
    </>
  );
};

export default Post;
