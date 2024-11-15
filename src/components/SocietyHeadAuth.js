import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';

const SocietyHead = () => {
    
    const [societies, setSocieties] = useState(["Knuth", "NSS", "Optica"]);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut();  // Use Auth.signOut() for logging out
            navigate("/"); // Navigate to the landing page after sign-out
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <div className="p-7 text-2xl font-bold">
                        Society Head Portal
                    </div>
                    
                    <div className="p-10">
                        {societies.map((society, index) => (
                            <div key={index} className="p-4">
                                <button 
                                    className="border border-black px-2 text-lg hover:bg-gray-400"
                                    onClick={() => navigate(`/society?name=${society}`)}
                                >
                                    {society}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <button 
                            className="border border-black px-4 py-2 text-lg hover:bg-gray-400" 
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
