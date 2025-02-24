import { useContext } from "react";
import { PostList } from "../store/PostList";
import TrendingTag from "./TrendingTag";

const ExploreTrendingTags = () => {
  const { tagList } = useContext(PostList);
    let sortedTags = Array.from(tagList)
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => ({ tag: key, count: value }));

  return (
    <div>
      <div className="border border-secondary p-3">
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

export default ExploreTrendingTags;
