import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostList = createContext({
  postList: [],
  bookmarksList: [],
  addPost: () => {},
  deletePost: () => {},
  handleLikes: () => {},
  handleBookmarks: () => {},
});

const DEFAULT_POST_LIST = [
  {
    caption: "React1",
    imageFile: "/public/react.png",
    likes: 45,
    comments: [],
    bookmarks: 12,
    key: uuidv4(),
  },
  {
    caption: "React2",
    imageFile: "/public/react.png",
    likes: 145,
    comments: [],
    bookmarks: 22,
    key: uuidv4(),
  },
  {
    caption: "React3",
    imageFile: "/public/react.png",
    likes: 24,
    comments: [],
    bookmarks: 2,
    key: uuidv4(),
  },
];

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
      post.key === action.payload.key
        ? {
            ...post,
            likes: action.payload.likeButtonState
              ? post.likes + 1
              : post.likes - 1,
          }
        : post
    );
  } else if (action.type === "HANDLE_BOOKMARKS") {
    newPostList = newPostList.map((post) =>
      post.key === action.payload.key
        ? {
            ...post,
            bookmarks: action.payload.bookmarkButtonState
              ? post.bookmarks + 1
              : post.bookmarks - 1,
          }
        : post
    );
  }
  // else if (action.type === "RENDER_STORED_ITEM") {
  //   newPostList = action.payload;
  // }
  return newPostList;
}

function bookmarkListReducer(currBookmarkList, action) {
  console.log("check");
  let newBookmarkList = [...currBookmarkList];
  if (action.type === "ADD_ITEM") {
    console.log("check");
    newBookmarkList = [action.payload, ...newBookmarkList];
    // storePostList(newBookmarkList);
  } else if (action.type === "DELETE_ITEM") {
    newBookmarkList = newBookmarkList.filter(
      (item) => item.key !== action.payload
    );
    // storePostList(newBookmarkList);
  }
  // else if (action.type === "RENDER_STORED_ITEM") {
  //   newBookmarkList = action.payload;
  // }
  console.log(newBookmarkList);
  return newBookmarkList;
}

const PostListProvider = ({ children }) => {
  let [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  let [bookmarksList, dispatchBookmarksList] = useReducer(
    bookmarkListReducer,
    []
  );

  const handleBookmarksList = (key, state) => {
    console.log("check");
    const bookmarkData = postList.filter((post) => post.key === key);
    state ? addBookmark(bookmarkData) : deleteBookmark(key);
  };

  const addBookmark = (bookmarkData) => {
    console.log("check");
    const newPostAction = {
      type: "ADD_ITEM",
      payload: bookmarkData,
    };
    dispatchBookmarksList(newPostAction);
  };

  const deleteBookmark = (keyToDelete) => {
    const deletePostAction = {
      type: "DELETE_ITEM",
      payload: keyToDelete,
    };
    dispatchBookmarksList(deletePostAction);
  };

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

  const handleLikes = (key, likeButtonState) => {
    const handleLikesAction = {
      type: "HANDLE_LIKES",
      payload: {
        likeButtonState: likeButtonState,
        key: key,
      },
    };
    dispatchPostList(handleLikesAction);
  };

  const handleBookmarks = (key, bookmarkButtonState) => {
    const handleBookmarksAction = {
      type: "HANDLE_BOOKMARKS",
      payload: {
        bookmarkButtonState: bookmarkButtonState,
        key: key,
      },
    };
    dispatchPostList(handleBookmarksAction);
    handleBookmarksList(key, bookmarkButtonState);
  };

  return (
    <PostList.Provider
      value={{
        postList,
        bookmarksList,
        addPost,
        deletePost,
        handleLikes,
        handleBookmarks,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
