import Post from "./Post";
import { PostList } from "../store/PostList";
import { useContext } from "react";
import PostsButton from "./PostsButton";

const Home = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      <PostsButton></PostsButton>
      <div className="position-sticky border border-secondary">
        {postList.map((postData) => {
          return <Post key={postData.key} postData={postData}></Post>;
        })}
      </div>
    </>
  );
};

export default Home;
