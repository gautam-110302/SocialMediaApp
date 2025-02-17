import { useEffect, useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostList = createContext({
  postList: [],
  bookmarksList: [],
  profileData: {},
  addPost: () => {},
  deletePost: () => {},
  handleLikeButtonClick: () => {},
  handleBookmarkButtonClick: () => {},
  addDefaultPosts: ()=>{},
});

const DEFAULT_PROFILE_DATA = {
  name: "ReactUser1",
  username: "react0001",
  imageFile: "/public/dog.png",
};

// const DEFAULT_POST_LIST = [
//   {
//     profileData: {
//       name: "ReactUser2",
//       username: "react0002",
//       imageFile: "/public/cat.png",
//     },
//     caption: "React1",
//     imageFile: "/public/react.png",
//     likes: 45,
//     comments: [],
//     bookmarks: 12,
//     key: uuidv4(),
//     likeState: false,
//     bookmarkState: false,
//   },
//   {
//     profileData: {
//       name: "ReactUser2",
//       username: "react0002",
//       imageFile: "/public/cat.png",
//     },
//     caption: "React2",
//     imageFile: "/public/react.png",
//     likes: 145,
//     comments: [],
//     bookmarks: 22,
//     key: uuidv4(),
//     likeState: false,
//     bookmarkState: false,
//   },
//   {
//     profileData: {
//       name: "ReactUser2",
//       username: "react0002",
//       imageFile: "/public/cat.png",
//     },
//     caption: "React3",
//     imageFile: "/public/react.png",
//     likes: 24,
//     comments: [],
//     bookmarks: 2,
//     key: uuidv4(),
//     likeState: false,
//     bookmarkState: false,
//   },
// ];

function profileDataReducer(currProfileData, action) {}

function postListReducer(currPostList, action) {
  let newPostList = [...currPostList];
  if (action.type === "ADD_ITEM") {
    newPostList = [action.payload, ...newPostList];
    // storePostList(newPostList);
  } else if (action.type === "DELETE_ITEM") {
    newPostList = newPostList.filter((item) => item.key !== action.payload);
    // storePostList(newPostList);
  } else if (action.type === "HANDLE_LIKES") {
    newPostList = newPostList.map((post) =>
      post.key === action.payload
        ? {
            ...post,
            likes: post.likeState ? post.likes - 1 : post.likes + 1,
            likeState: !post.likeState,
          }
        : post
    );
  } else if (action.type === "HANDLE_BOOKMARKS") {
    newPostList = newPostList.map((post) =>
      post.key === action.payload
        ? {
            ...post,
            bookmarks: post.bookmarkState
              ? post.bookmarks - 1
              : post.bookmarks + 1,
            bookmarkState: !post.bookmarkState,
          }
        : post
    );
  }
  else if (action.type === "ADD_DEFAULT_ITEMS") {
    newPostList = action.payload.map((postData) => ({
      profileData: {
        name: `ReactUser${postData.userId}`,
        username: postData.userId,
        imageFile: "/public/cat.png",
      },
      caption: postData.body,
      imageFile: "",
      likes: postData.reactions.likes,
      comments: [],
      bookmarks: postData.reactions.dislikes,
      key: uuidv4(),
      likeState: false,
      bookmarkState: false,
    }));
 }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  let [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  let [profileData, dispatchProfileData] = useReducer(
    profileDataReducer,
    DEFAULT_PROFILE_DATA
  );

  const addPost = (newPostData) => {
    const newPostAction = {
      type: "ADD_ITEM",
      payload: newPostData,
    };
    dispatchPostList(newPostAction);
  };

  const deletePost = (keyToDelete) => {
    const deletePostAction = {
      type: "DELETE_ITEM",
      payload: keyToDelete,
    };
    dispatchPostList(deletePostAction);
  };

  const addDefaultPosts=(defaultPostData)=>{
    const defaultPostAction = {
      type: "ADD_DEFAULT_ITEMS",
      payload: defaultPostData,
    };
    dispatchPostList(defaultPostAction);
  }


  const handleLikeButtonClick = (key) => {
    const handleLikesAction = {
      type: "HANDLE_LIKES",
      payload: key,
    };
    dispatchPostList(handleLikesAction);
  };

  const handleBookmarkButtonClick = (key) => {
    const handleBookmarksAction = {
      type: "HANDLE_BOOKMARKS",
      payload: key,
    };
    dispatchPostList(handleBookmarksAction);
  };

  return (
    <PostList.Provider
      value={{
        postList,
        profileData,
        addPost,
        deletePost,
        handleLikeButtonClick,
        handleBookmarkButtonClick,
        addDefaultPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
