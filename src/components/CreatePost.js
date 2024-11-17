import React, { useEffect, useState } from "react";

function CreatePost() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    setName(url.searchParams.get("name"));
  }, []);

  const submit = () => {
    console.log(`${title}`);
    console.log(`${content}`);
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505] p-10">
      {/* Header */}
      <div className="text-3xl font-bold mb-8 text-center text-teal-700">
        Create Post for {name}
      </div>

      {/* Form Section */}
      <div className="w-full max-w-3xl bg-beige-200 p-6 rounded-lg shadow-md border border-gray-300">
        <div className="mb-4">
          <label className="block text-lg font-medium text-teal-700 mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of the post"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-teal-700 mb-2">
            Content
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write the content of the post"
            rows={5}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-teal-700 mb-2">
            Attachment
          </label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all duration-300"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
