const LoadingSpinner = () => {
  return (
    <>
      <center>
        <div
          className="spinner-border text-white  mt-5 mb-5"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};

export default LoadingSpinner;
