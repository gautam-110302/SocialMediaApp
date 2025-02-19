import Post from "./Post";
import { PostList } from "../store/PostList";
import { useContext, useEffect, useState } from "react";
import PostsButton from "./PostsButton";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const { postList, fetchState } = useContext(PostList);

  return (
    <>
      <PostsButton />
      {fetchState && <LoadingSpinner />}
      <div className="position-sticky border border-secondary">
        {!fetchState &&
          postList.map((postData) => (
            <Post key={postData.key} postData={postData} />
          ))}
      </div>
    </>
  );
};

export default Home;
