import { useEffect, useState } from "react";

function SocietyPosts() {
  const [societyName, setSocietyName] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "Title-1", content: "This is the first post's content.", timestamp: "Oct 17, 2024" },
    { id: 2, title: "Title-2", content: "This is the second post's content.", timestamp: "Oct 26, 2024" },
    { id: 3, title: "Title-3", content: "This is the third post's content.", timestamp: "Nov 3, 2024" },
    { id: 4, title: "Title-4", content: "This is the fourth post's content.", timestamp: "Nov 14, 2024" },
  ]);

  useEffect(() => {
    const url = new URL(window.location.href);
    setSocietyName(url.searchParams.get("name"));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-beige-100 font-oxygen text-[#050505] p-10">
      {/* Header */}
      <div className="text-3xl font-bold mb-8 text-center text-teal-700">
        Welcome to {societyName} Hub
      </div>

      {/* Posts Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col items-center">
            {/* Post Identifier */}
            <div className="text-lg font-medium text-teal-800 mb-2">
              Post{post.id}
            </div>

            {/* Post Card */}
            <div className="bg-beige-200 p-4 rounded-lg border border-gray-300 shadow-lg w-full">
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-300 rounded-t-lg mb-4 flex items-center justify-center text-gray-700">
                Image Placeholder
              </div>

              {/* Timestamp */}
              <div className="text-sm text-gray-500 mb-2">{post.timestamp}</div>

              {/* Title */}
              <h2 className="text-xl font-bold text-teal-700 mb-2">
                {post.title}
              </h2>

              {/* Content */}
              <p className="text-gray-600">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocietyPosts;
