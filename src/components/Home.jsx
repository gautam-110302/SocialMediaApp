import Post from "./Post";
import { PostList } from "../store/PostList";
import { useContext, useEffect, useState } from "react";
import PostsButton from "./PostsButton";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const { postList, addDefaultPosts } = useContext(PostList);
  const [fetchState, setFetchState] = useState(false);

  useEffect(() => {
    setFetchState(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDefaultPosts(data.posts);
        setFetchState(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setFetchState(false);
      });
  }, []);

  return (
    <>
      <PostsButton />
      {fetchState && <LoadingSpinner />}
      <div className="position-sticky border border-secondary">
        {!fetchState && (
          postList.map((postData) => (
            <Post key={postData.key} postData={postData} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
