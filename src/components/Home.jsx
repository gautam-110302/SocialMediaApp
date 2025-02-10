import Post from "./Post";

const Home = () => {
  return (
    <>
      <div className={`position-sticky top-0 start-0`}>
        <button
          type="button"
          className="btn btn-dark w-100"
          style={{ height: "10vh", zIndex: 1000 }}
        >
          Posts
        </button>
      </div>
      <div
        className="position-sticky"
        style={{ height: "calc(100% - 10vh - 10px)", paddingBottom: "10px" }}
      >
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </>
  );
};

export default Home;
