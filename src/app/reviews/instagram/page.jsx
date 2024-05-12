const instagramReview = () => {
  return (
    <div className="bg-white m-3 p-5 rounded">
      <h4 className="font-semibold">Share your reviews</h4>

      <form action="" className="my-5">
        <div>
          <label htmlFor="improve" className="block text-gray-600 mb-2">
            How we can improve?
          </label>
          <textarea
            name=""
            id="improve"
            placeholder="Enter information briefly!"
            className="outline-none bg-gray-100 px-4 py-2 w-full rounded"
          ></textarea>

          <div>
            <button
              type="button"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default instagramReview;
