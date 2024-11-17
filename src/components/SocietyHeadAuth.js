import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const SocietyHead = () => {
  const [societies, setSocieties] = useState([
    "Knuth",
    "NSS",
    "Optica",
    "Parola",
    "Thespian",
    "IEEE",
    "GDSC",
  ]);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/"); // Navigate to the landing page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505] p-10">
          {/* Header */}
          <div className="text-3xl font-bold mb-8 text-center text-teal-700">
            Society Head Portal
          </div>

          {/* List of Societies */}
          <div className="w-full max-w-3xl">
            {societies.map((society, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 mb-4 bg-beige-200 border border-black rounded-md shadow-md"
              >
                <div className="flex-grow text-xl text-teal-700 font-semibold">
                  {society}
                </div>
                <button
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all duration-300"
                  onClick={() => navigate(`/society?name=${society}`)}
                >
                  Manage
                </button>
              </div>
            ))}
          </div>

          {/* Sign Out Button */}
          <div className="mt-8">
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all duration-300"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  );
};

export default SocietyHead;
