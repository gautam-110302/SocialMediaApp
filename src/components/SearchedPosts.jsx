import { useContext } from "react";
import { PostList } from "../store/PostList";
import Post from "./Post";

const SearchedPosts = () => {
  const { postList, searchedItem } = useContext(PostList);
  if(searchedItem.tag === "text"){
    console.log("text-search");
    console.log(searchedItem.string);
  }
  let searchedPosts = [];
  searchedItem.type === "tag"
    ? (searchedPosts = postList.filter((post) =>
        post.tags.includes(searchedItem.string)
      ))
    : (searchedPosts = postList.filter((post) =>
        post.caption.includes(searchedItem.string)
      ));

  return (
    <div className="border border-secondary p-3">
      {searchedItem.string === "" ? (
        <div className="text-center mt-5">
          <div className="alert alert-light" role="alert">
            No tag searched.
          </div>
        </div>
      ) : searchedPosts.length > 0 ? (
        searchedPosts.map((postData) => (
          <Post key={postData.key} postData={postData} />
        ))
      ) : (
        <div className="text-center mt-5">
          <div className="alert alert-light" role="alert">
            No posts found.
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchedPosts;
