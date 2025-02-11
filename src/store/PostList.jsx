import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    caption: "React1",
    imageFile: "/public/react.png",
    key: uuidv4(),
  },
  {
    caption: "React2",
    imageFile: "/public/react.png",
    key: uuidv4(),
  },
  {
    caption: "React3",
    imageFile: "/public/react.png",
    key: uuidv4(),
  },
];

function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type === "ADD_ITEM") {
    newPostList = [action.payload, ...currPostList];
    // storePostList(newPostList);
  } else if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter((item) => item.key !== action.payload);
    // storePostList(newPostList);
  }
  // else if (action.type === "RENDER_STORED_ITEM") {
  //   newPostList = action.payload;
  // }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  let [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (newPostData) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: newPostData,
    };
    dispatchPostList(newItemAction);
  };

  const deletePost = (keyToDelete) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: keyToDelete,
    };
    dispatchPostList(deleteItemAction);
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
