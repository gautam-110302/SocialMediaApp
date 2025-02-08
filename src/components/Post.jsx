import PostFooter from "./PostFooter";

const Post = () => {
  return (
    <>
      <div
        class="card border border-light"
        style={{
          width: "100%",
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <PostFooter></PostFooter>
        </div>
      </div>
    </>
  );
};

export default Post;
