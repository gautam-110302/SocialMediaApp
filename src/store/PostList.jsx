import { useEffect, useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostList = createContext({
  postList: [],
  bookmarksList: [],
  addPost: () => {},
  deletePost: () => {},
  handleLikeButtonClick: () => {},
  handleBookmarkButtonClick: () => {},
});

const DEFAULT_POST_LIST = [
  {
    caption: "React1",
    imageFile: "/public/react.png",
    likes: 45,
    comments: [],
    bookmarks: 12,
    key: uuidv4(),
    likeState: false,
    bookmarkState: false,
  },
  {
    caption: "React2",
    imageFile: "/public/react.png",
    likes: 145,
    comments: [],
    bookmarks: 22,
    key: uuidv4(),
    likeState: false,
    bookmarkState: false,
  },
  {
    caption: "React3",
    imageFile: "/public/react.png",
    likes: 24,
    comments: [],
    bookmarks: 2,
    key: uuidv4(),
    likeState: false,
    bookmarkState: false,
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
  // else if (action.type === "RENDER_STORED_ITEM") {
  //   newPostList = action.payload;
  // }
  return newPostList;
}

function bookmarkListReducer(currBookmarkList, action) {
  let newBookmarkList = [...currBookmarkList];
  if (action.type === "ADD_ITEM") {
    const existingPostIndex = newBookmarkList.findIndex(
      (post) => post.key === action.payload.key
    );

    if (existingPostIndex === -1) {
      newBookmarkList = [action.payload, ...newBookmarkList];
    } else {
      newBookmarkList[existingPostIndex] = {
        ...newBookmarkList[existingPostIndex],
        likes: action.payload.likes,
        likeState: action.payload.likeState,
      };
    }
    // storePostList(newBookmarkList);
  } else if (action.type === "DELETE_ITEM") {
    newBookmarkList = newBookmarkList.filter(
      (item) => item.key !== action.payload
    );
    // storePostList(newBookmarkList);
  } else if (action.type === "CHANGE_LIKES") {
    const existingPostIndex = newBookmarkList.findIndex(
      (post) => post.key === action.payload.key
    );

    if (existingPostIndex !== -1) {
      newBookmarkList[existingPostIndex] = {
        ...newBookmarkList[existingPostIndex],
        likes: action.payload.likes,
        likeState: action.payload.likeState,
      };
    }
  }
  // else if (action.type === "RENDER_STORED_ITEM") {
  //   newBookmarkList = action.payload;
  // }
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

  const handleBookmarksList = (key) => {
    const bookmarkData = postList.find((post) => post.key === key);
    if (bookmarkData) {
      bookmarkData.bookmarkState
        ? addBookmark(bookmarkData)
        : deleteBookmark(key);
    }
  };

  const addBookmark = (bookmarkData) => {
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

  const [lastLikedKey, setLastLikedKey] = useState(null);

  useEffect(() => {
    if (lastLikedKey) {
      const updatedPost = postList.find((post) => post.key === lastLikedKey);
      const handleLikeChangeAction = {
        type: "CHANGE_LIKES",
        payload: updatedPost,
      };
      dispatchBookmarksList(handleLikeChangeAction);
    }
  }, [postList, lastLikedKey]);

  const handleLikeButtonClick = (key) => {
    const handleLikesAction = {
      type: "HANDLE_LIKES",
      payload: key,
    };
    dispatchPostList(handleLikesAction);
    setLastLikedKey(key); // Track the key of the liked post
  };

  const [lastBookmarkedKey, setLastBookmarkedKey] = useState(null);

  useEffect(() => {
    if (lastBookmarkedKey) {
      const post = postList.find((post) => post.key === lastBookmarkedKey);
      handleBookmarksList(lastBookmarkedKey);
    }
  }, [postList, lastBookmarkedKey]);

  const handleBookmarkButtonClick = (key) => {
    const handleBookmarksAction = {
      type: "HANDLE_BOOKMARKS",
      payload: key,
    };
    dispatchPostList(handleBookmarksAction);
    setLastBookmarkedKey(key); // Track the key after dispatch
  };

  return (
    <PostList.Provider
      value={{
        postList,
        bookmarksList,
        addPost,
        deletePost,
        handleLikeButtonClick,
        handleBookmarkButtonClick,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
