import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostList } from "../store/PostList";

const TrendingTag = ({ tagName, numberOfTags }) => {
  const { setSearchedItem } = useContext(PostList);

  const handleLinkClick = ()=>{
    const newSearchedItem = {
      string:tagName,
      type:"tag",
    }
    setSearchedItem(newSearchedItem);
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start text-white background-color">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link
              to="/explore/searched-posts"
              className="text-decoration-none text-white"
              onClick={handleLinkClick}
            >
              {tagName}
            </Link>
          </div>
        </div>
        <span className="badge text-bg-primary rounded-pill">
          {numberOfTags}
        </span>
      </li>
    </>
  );
};

export default TrendingTag;
