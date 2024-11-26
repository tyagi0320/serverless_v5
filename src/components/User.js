import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const User = () => {
  // Mock data for societies
  const [societies, setSocieties] = useState([
    { "name": "Optica", "followed": false },
    { "name": "Knuth", "followed": false },
    { "name": "NSS", "followed": false },
    { "name": "Parola", "followed": false },
    { "name": "Thespian", "followed": false },
    { "name": "IEEE", "followed": false },
    { "name": "GDSC", "followed": false }
  ]);

  const navigate = useNavigate();

  // Function to toggle follow/unfollow
  const toggleFollow = (name) => {
    setSocieties((prevSocieties) =>
      prevSocieties.map((society) => {
        if (society.name === name) {
          // Display appropriate toast based on the follow status
          society.followed
            ? toast.warning(`Unfollowed ${name}`)
            : toast.success(`You are now following ${name}`);
          return { ...society, followed: !society.followed };
        }
        return society;
      })
    );
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505] p-10">
          {/* Header */}
          <div className="text-3xl font-bold mb-8 text-center text-teal-700">
            List of Societies
          </div>

          {/* Display List of Societies */}
          <div className="w-full max-w-3xl">
            {societies.map((element, index) => (
              <div className="flex justify-between items-center p-4 mb-4 bg-beige-200 border border-black rounded-md shadow-md" key={index}>
                <div className="flex-grow text-xl">{element.name}</div>
                
                {/* View Button */}
                <button
                  className="bg-teal-600 text-white px-6 py-2 rounded-md mr-4 hover:bg-teal-700 transition-all duration-300"
                  onClick={() => navigate(`/societyPosts?name=${element.name}`)}
                >
                  View
                </button>

                {/* Follow/Unfollow Button */}
                <button
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${element.followed ? 'bg-gray-400 text-white' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                  onClick={() => toggleFollow(element.name)}
                >
                  {element.followed ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>

          {/* Live Chat Button */}
          <div className="mt-8">
            <button
              className="bg-teal-600 text-white p-3 text-xl rounded-md hover:bg-teal-700 transition-all duration-300"
              onClick={() => navigate('/livechat')}
            >
              Chat Room
            </button>
          </div>

          {/* Sign out Button */}
          <div className="mt-4">
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all duration-300"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>

          {/* Toast Container */}
          <ToastContainer />
        </main>
      )}
    </Authenticator>
  );
};

export default User;
