const TrendingTag = ({ tagName, numberOfTags }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start text-white background-color">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <a href="#" className="text-decoration-none text-white">
              {tagName}
            </a>
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
