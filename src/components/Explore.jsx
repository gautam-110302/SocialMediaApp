import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PostList } from "../store/PostList";

const Explore = () => {
  const { setSearchedItem } = useContext(PostList);
  const [searchTerm, setSearchTerm] = useState("");
  const navigator = useNavigate();

  const handleSubmitButton = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      let newSearchedItem = {string:searchTerm, type:"text"}
      setSearchedItem(newSearchedItem);
      navigator("/explore/searched-posts")
    }
  };
  return (
    <div>
      <div className="border border-secondary">
        <div className="p-2">
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-white"
            role="search"
            onSubmit={handleSubmitButton}
          >
            <input
              type="search"
              className="background-color form-control text-white border border-secondary rounded-5"
              placeholder="Search..."
              aria-label="Search"
              id="explore-search-bar"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Explore;
