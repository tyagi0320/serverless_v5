import React, { useEffect, useState } from "react";

function DeletePost() {
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
        Delete Post for {name}
      </div>

      {/* Posts Section */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-beige-200 p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center"
          >
            <div className="text-xl font-medium text-teal-700 mb-4">
              Post {post}
            </div>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
              onClick={() => {
                setPosts(posts.filter((_, i) => i !== index));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeletePost;
