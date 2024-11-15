import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-beige-100 font-oxygen text-[#050505]">
            <div className="max-w-screen-xl w-full p-10">
                {/* Jaypee Institute Heading - at the top center */}
                <h2 className="text-2xl font-semibold text-teal-600 text-center mb-8">
                    JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA SEC-62
                </h2>

                {/* Box Container with Thin Border, Square, and Shadow */}
                <div className="flex flex-col items-center p-8 bg-beige-200 border border-black rounded-lg shadow-lg">
                    {/* Main Heading */}
                    <h1 className="text-3xl font-bold text-teal-700 text-center mb-8">
                        Welcome to the Society Portal
                    </h1>

                    {/* Buttons */}
                    <button
                        className="bg-teal-600 text-white p-3 m-3 rounded-md hover:bg-teal-700 transition-all duration-300"
                        onClick={() => navigate('/User')}
                    >
                        General User
                    </button>
                    <button
                        className="bg-teal-600 text-white p-3 m-3 rounded-md hover:bg-teal-700 transition-all duration-300"
                        onClick={() => navigate('/society-head')}
                    >
                        Society Head
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
