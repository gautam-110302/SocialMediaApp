import styles from "./RightSidebar.module.css";
import Footer from "./Footer";
import { useContext } from "react";
import { PostList } from "../store/PostList";
import TrendingTag from "./TrendingTag";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const { tagList } = useContext(PostList);
  let sortedTags = Array.from(tagList)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => ({ tag: key, count: value }));

  return (
    <div
      className={`position-sticky top-0 end-0 overflow-auto d-flex flex-column align-items-start min-vh-100 vw-25`}
    >
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-280px`}
      >
        

        <hr />
        <div className="card background-color text-white p-3 border border-secondary">
          <div className="card-header text-center">
            <h4>Trending</h4>
          </div>
          <ul className="list-group background-color text-white border-0">
            {sortedTags.slice(0, 3).map((tag, index) => (
              <TrendingTag
                key={index}
                tagName={tag.tag}
                numberOfTags={tag.count}
              />
            ))}
          </ul>
          <div className="card-footer ">
            <Link className="link-opacity-100 text-decoration-none" to="/explore">
              See more
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RightSidebar;
