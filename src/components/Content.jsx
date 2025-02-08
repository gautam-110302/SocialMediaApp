import Post from "./Post";

const Content = () => {
  return (
    <>
      <div
        className="flex-grow-1 "
        style={{backgroundColor: "rgb(33, 37, 41)"}}
      >
        <div className={`position-sticky top-0 start-0`}>
          <button type="button" className="btn btn-dark"
          style={{ width: "100%" }}>
            Posts
          </button>
        </div>
        <div className="overflow-auto">
          <Post></Post>
        </div>
      </div>
    </>
  );
};

export default Content;
