const Comment = ({ comment }) => {
  return (
    <div className="border border-secondary text-white my-1">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div>
            <img
              src={comment.commentProfileData.imageFile}
              alt=""
              width="50"
              height="50"
              className="rounded-circle me-2"
            />
          </div>
          <div>
            <h5 className="card-title">{comment.commentProfileData.name}</h5>
            <h6 className="card-subtitle mb-2 text-light">{`@${comment.commentProfileData.username}`}</h6>
          </div>
        </div>
      </div>
      <div className="py-1">
        {comment.commentValue}
      </div>
    </div>
  );
};

export default Comment;
