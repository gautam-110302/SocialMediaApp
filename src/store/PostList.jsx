import { useEffect, useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostList = createContext({
  postList: [],
  bookmarksList: [],
  profileData: {},
  fetchState: false,
  searchedItem: {},
  selectedPostKey: "",
  addPost: () => {},
  deletePost: () => {},
  handleLikeButtonClick: () => {},
  handleCommentButtonClick: () => {},
  handleBookmarkButtonClick: () => {},
  editProfile: () => {},
  setSearchedItem: () => {},
  setSelectedPostKey: () => {},
  tagList: {},
});

const DEFAULT_PROFILE_DATA = {
  name: "ReactUser1",
  username: "react0001",
  bio: ".",
  imageFile: "/dog.png",
};

const DEFAULT_COMMENT_PROFILE_DATA = {
  name: "ReactCommentator",
  username: "react0010",
  bio: ".",
  imageFile: "/userImage.png",
};
const DEFAULT_COMMENTS = [
  {
    commentValue: "This is amazing! Keep up the great work!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "I can't believe how cool this is!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "Where do I even start? This is fantastic!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "Incredible! You’ve really outdone yourself this time.",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "I’ve never seen anything like this before!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "This blew my mind! So creative!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "I’m obsessed with this! Can’t wait to see more.",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "You nailed it! Everything is perfect.",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "This deserves way more attention. So well done!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
  {
    commentValue: "Wow, just wow. Pure genius!",
    commentKey: uuidv4(),
    commentProfileData: DEFAULT_COMMENT_PROFILE_DATA,
  },
];

function profileDataReducer(currProfileData, action) {
  let newProfileData = {
    name: currProfileData.name,
    username: currProfileData.username,
    bio: currProfileData.bio,
    imageFile: currProfileData.imageFile,
  };

  if (action.type === "EDIT_PROFILE") {
    newProfileData.name = action.payload.data.name;
    newProfileData.bio = action.payload.data.bio;

    if (action.payload.pictureChoice === "change") {
      newProfileData.imageFile = action.payload.data.imageFile;
    } else if (action.payload.pictureChoice === "delete") {
      newProfileData.imageFile = "/userImage.png";
    }
  }
  return newProfileData;
}

function tagListReducer(currTagList, action) {
  let newTagList = new Map(currTagList);
  if (action.type === "ADD_TAGS") {
    action.payload.forEach((tag) => {
      if (newTagList.has(tag)) {
        newTagList.set(tag, newTagList.get(tag) + 1);
      } else {
        newTagList.set(tag, 1);
      }
    });
  }
  return newTagList;
}

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
  } else if (action.type === "HANDLE_COMMENTS") {
    newPostList = newPostList.map((post) =>
      post.key === action.payload.key
        ? {
            ...post,
            comments: [action.payload.comment, ...post.comments],
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
  } else if (action.type === "ADD_DEFAULT_ITEMS") {
    newPostList = action.payload.map((postData) => {
      return {
        profileData: {
          name: `ReactUser${postData.userId}`,
          username: postData.userId,
          imageFile: "/cat.png",
        },
        caption: postData.body,
        imageFile: "",
        tags: postData.tags,
        likes: postData.reactions.likes,
        comments: DEFAULT_COMMENTS,
        bookmarks: postData.reactions.dislikes,
        key: uuidv4(),
        likeState: false,
        bookmarkState: false,
        yourPost: false,
      };
    });
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  let [postList, dispatchPostList] = useReducer(postListReducer, []);

  let [profileData, dispatchProfileData] = useReducer(
    profileDataReducer,
    DEFAULT_PROFILE_DATA
  );

  let [tagList, dispatchTagList] = useReducer(tagListReducer, new Map());

  const addTags = (tags) => {
    dispatchTagList({
      type: "ADD_TAGS",
      payload: tags,
    });
  };

  const editProfile = (newProfileData, profilePictureChoice) => {
    const editProfileAction = {
      type: "EDIT_PROFILE",
      payload: {
        data: newProfileData,
        pictureChoice: profilePictureChoice,
      },
    };
    dispatchProfileData(editProfileAction);
  };

  const addPost = (newPostData) => {
    const newPostAction = {
      type: "ADD_ITEM",
      payload: newPostData,
    };
    dispatchPostList(newPostAction);
    addTags(newPostData.tags);
  };

  const deletePost = (keyToDelete) => {
    const deletePostAction = {
      type: "DELETE_ITEM",
      payload: keyToDelete,
    };
    dispatchPostList(deletePostAction);
  };

  const addDefaultPosts = (defaultPostData) => {
    const defaultPostAction = {
      type: "ADD_DEFAULT_ITEMS",
      payload: defaultPostData,
    };
    dispatchPostList(defaultPostAction);
    defaultPostData.forEach((postData) => {
      addTags(postData.tags);
    });
  };

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

  const handleLikeButtonClick = (key) => {
    const handleLikesAction = {
      type: "HANDLE_LIKES",
      payload: key,
    };
    dispatchPostList(handleLikesAction);
  };

  const handleCommentButtonClick = (key, comment) => {
    const handleCommentAction = {
      type: "HANDLE_COMMENTS",
      payload: {
        key: key,
        comment: {
          commentValue: comment,
          commentKey: uuidv4(),
          commentProfileData: profileData,
        },
      },
    };
    dispatchPostList(handleCommentAction);
  };

  const handleBookmarkButtonClick = (key) => {
    const handleBookmarksAction = {
      type: "HANDLE_BOOKMARKS",
      payload: key,
    };
    dispatchPostList(handleBookmarksAction);
  };

  let [searchedItem, setSearchedItem] = useState({ string: "", type: "" });

  let [selectedPostKey, setSelectedPostKey] = useState("");

  return (
    <PostList.Provider
      value={{
        postList,
        profileData,
        fetchState,
        searchedItem,
        selectedPostKey,
        addPost,
        deletePost,
        handleLikeButtonClick,
        handleCommentButtonClick,
        handleBookmarkButtonClick,
        editProfile,
        setSearchedItem,
        setSelectedPostKey,
        tagList,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
