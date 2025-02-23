import { useContext } from "react";
import TrendingTag from "./TrendingTag";
import { PostList } from "../store/PostList";

const Explore = () => {
  const { tagList } = useContext(PostList);
  let sortedTags = Array.from(tagList)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => ({ tag: key, count: value }));

  console.log(sortedTags);
  return (
    <div>
      <div className="border border-secondary">
        <div className="p-2">
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-white"
            role="search"
          >
            <input
              type="search"
              className="background-color form-control text-white border border-secondary rounded-5"
              placeholder="Search..."
              aria-label="Search"
              id="explore-search-bar"
            />
          </form>
        </div>
        <div className="border border-primary">
          <button type="button" className="btn btn-dark w-100 rounded-0">
            Trending
          </button>
        </div>
      </div>

      <div className="border border-secondary p-3">
        <ol className="list-group list-group-numbered">
          {sortedTags.slice(0, 10).map((tag, index) => (
            <TrendingTag
              key={index}
              tagName={tag.tag}
              numberOfTags={tag.count}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Explore;
