import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Society() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    setName(url.searchParams.get("name"));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505] p-10">
      {/* Header */}
      <div className="text-3xl font-bold mb-8 text-center text-teal-700">
        Welcome to {name} Hub
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-3xl bg-beige-200 p-6 rounded-lg shadow-md border border-gray-300">
        <div className="text-lg font-medium text-teal-700 mb-6">
          Manage your society by choosing an action:
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4">
          <button
            className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all duration-300"
            onClick={() => navigate(`/createPost?name=${name}`)}
          >
            Create a Post
          </button>
          <button
            className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
            onClick={() => navigate(`/updatePost?name=${name}`)}
          >
            Update a Post
          </button>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all duration-300"
            onClick={() => navigate(`/deletePost?name=${name}`)}
          >
            Delete a Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Society;
