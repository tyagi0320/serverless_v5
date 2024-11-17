import React, { useEffect, useState } from "react";

function UpdatePost() {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const url = new URL(window.location.href);
    setName(url.searchParams.get("name"));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505] p-10">
      {/* Header */}
      <div className="text-3xl font-bold mb-8 text-center text-teal-700">
        Update Post for {name}
      </div>

      {/* Posts List */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-beige-200 p-6 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between"
          >
            <div className="text-lg font-semibold text-teal-700 mb-4">
              Post {post}
            </div>
            <button
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
              onClick={() => alert(`Update functionality for Post ${post} not implemented`)}
            >
              Update Post {post}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpdatePost;
