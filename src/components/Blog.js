import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

function Blog({ type }) {
  const {
    loader,
    setLoader,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchData,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleTitleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  const handleCategoryClick = (category) => {
    navigate(`/category/${category.replace(" ", "-")}`);
  };
  const handleTagClick = (tag) => {
    navigate(`/tag/${tag.replace(" ", "-")}`);
  };

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div className="w-1/2 mx-auto mb-20 mt-4">
      {loader ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {type && (
            <div className="flex mr-2 items-center">
              <button
                onClick={handleBackBtn}
                className="border border-slate-400 px-2 py-1 mr-2 rounded-md"
              >
                Back
              </button>
              {type === "tag" ? (
                <div>
                  Blogged tagged{" "}
                  <span className="underline text-blue-600 ml-2">#{tag}</span>
                </div>
              ) : (
                <div>
                  Blogged on{" "}
                  <span className="underline text-blue-600 ml-2">#{tag}</span>
                </div>
              )}
            </div>
          )}
          {posts.map((post, idx) => (
            <div key={post.id} className="mb-6">
              <button
                className="font-bold text-lg hover:underline"
                onClick={() => handleTitleClick(post.id)}
              >
                {post.title}
              </button>
              <div>
                By {post.author} on{" "}
                <button
                  className="font-bold hover:underline"
                  onClick={() => handleCategoryClick(post.category)}
                >
                  {post.category}
                </button>
              </div>
              <div className="mb-2">Posted On {post.date}</div>
              <div>{post.content}</div>
              <div className="flex flex-wrap">
                {post.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="text-blue-600 underline mr-2"
                    onClick={() => handleTagClick(tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
